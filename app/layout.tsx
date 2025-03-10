import type { Metadata } from "next";
import { Geist, Poppins, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const notoSansTC = Noto_Sans_TC({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-tc',
});

export const metadata: Metadata = {
  title: "APAC Auto Glass | Professional Auto Glass Services in Richmond & Burnaby",
  description: "Expert windshield replacement, ADAS calibration, and chip repair services. ICBC certified, lifetime warranty. Serving Richmond and Burnaby areas.",
  keywords: "auto glass replacement, windshield repair, ADAS calibration, ICBC claims, Richmond auto glass, Burnaby windshield replacement",
  openGraph: {
    title: "APAC Auto Glass | Professional Auto Glass Services",
    description: "Expert windshield replacement and repair services in Richmond & Burnaby",
    images: ['/images/work_scene.jpg'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"
          async
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
