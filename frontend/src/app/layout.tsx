import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Helios Connected Device Cloud',
  description: 'Premium 3D Connected Services and IoT platform powered by Java Spring Boot microservices and event-driven architecture.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
