import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'APAC Auto Glass',
  description: 'Professional auto glass services in Richmond and Burnaby',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      </head>
      <body>{children}</body>
    </html>
  );
}