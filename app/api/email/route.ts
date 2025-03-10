import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const photos = formData.getAll('photos');
    
    const emailData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      make: formData.get('make'),
      model: formData.get('model'),
      year: formData.get('year'),
      vinNumber: formData.get('vinNumber'),
      location: formData.get('location'),
      service: formData.get('service'),
      isICBCInsured: formData.get('isICBCInsured'),
      hasADAS: formData.get('hasADAS'),
      comments: formData.get('comments'),
    };

    // Email to company
    const companyEmailContent = `
      New Quote Request:
      
      Customer Information:
      - Name: ${emailData.name}
      - Email: ${emailData.email}
      - Phone: ${emailData.phone}
      
      Vehicle Information:
      - Make: ${emailData.make}
      - Model: ${emailData.model}
      - Year: ${emailData.year}
      - VIN: ${emailData.vinNumber || 'Not provided'}
      
      Insurance & Safety Systems:
      - ICBC Insured: ${emailData.isICBCInsured}
      - Has ADAS/Forward Collision: ${emailData.hasADAS}
      
      Service Details:
      - Location: ${emailData.location}
      - Service Required: ${emailData.service}
      
      Additional Comments:
      ${emailData.comments || 'None'}
    `;

    // Email to customer
    const customerEmailContent = `
      Dear ${emailData.name},

      Thank you for requesting a quote from APAC Auto Glass. We have received your request for:
      
      Service: ${(emailData.service?.toString() ?? '').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
      Vehicle: ${emailData.year?.toString() ?? ''} ${emailData.make?.toString() ?? ''} ${emailData.model?.toString() ?? ''}
      Location: ${(emailData.location?.toString() ?? '').charAt(0).toUpperCase() + (emailData.location?.toString() ?? '').slice(1)}

      Our team will review your request and contact you within 1 business day with a detailed quote.
      
      For immediate assistance:
      - Call: 604-278-6100
      - Text: 778-387-7928
      
      Business Hours:
      Monday - Friday: 8am - 6pm
      Saturday: 9am - 4pm
      Sunday: Closed

      Thank you for choosing APAC Auto Glass!

      Best regards,
      APAC Auto Glass Team
    `;

    // Send email with attachments
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Quote Request from Website',
      text: companyEmailContent,
      attachments: await Promise.all(photos.map(async (photo) => ({
        filename: (photo as File).name,
        content: Buffer.from(await (photo as File).arrayBuffer())
      })))
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: emailData.email?.toString() ?? '',
      subject: 'Your Quote Request - APAC Auto Glass',
      text: customerEmailContent,
    });

    return NextResponse.json({ 
      success: true,
      message: 'Quote request received. We will respond within 1 business day.' 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to submit quote request. Please try again.' 
      },
      { status: 500 }
    );
  }
}