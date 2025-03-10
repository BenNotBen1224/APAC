import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export default function ServiceCard({ title, description, imageUrl, imageAlt }: ServiceCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}