import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AppHeader from '@/components/layout/header';
import AppFooter from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Royscan Engineering - NDE Solutions',
  description: 'Providing premier Non-Destructive Testing (NDE) and inspection services. Your partner in engineering integrity and safety.',
  keywords: 'Dye Penetrant Testing, Magnetic Particle Testing, Hardness Testing, Ultrasonic Testing, Radiography Testing, Welding Inspection, NDE, SINGLAS, DNV, ABS, ASMI'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="relative flex min-h-screen flex-col">
            <AppHeader />
            <main className="flex-1">
              {children}
            </main>
            <AppFooter />
        </div>
        <Toaster />
        </body>
    </html>
  );
}
