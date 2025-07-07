import Link from 'next/link';
import { MapPin, Phone, Mail, Printer } from 'lucide-react';

export default function AppFooter() {
  return (
    <footer className="border-t bg-card text-muted-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-headline text-lg font-semibold text-foreground">Royscan Engineering</h3>
            <p className="text-sm">
              © {new Date().getFullYear()} Royscan Engineering Pte Ltd.
              <br />
              All rights reserved.
            </p>
          </div>

          <div className="space-y-3 text-sm">
             <h3 className="font-headline text-lg font-semibold text-foreground">Contact Us</h3>
             <div className="space-y-2">
                <p className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>1 Sunview Road, #05-39 Eco-Tech@Sunview, Singapore 627615</span>
                </p>
                <p className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:+6568731811" className="hover:text-foreground">Tel: +65 6873 1811</a>
                </p>
                <p className="flex items-center gap-3">
                    <Printer className="h-4 w-4 text-primary" />
                    <span>Fax: +65 6873 2835</span>
                </p>
                <p className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:sales@royscan.com.sg" className="hover:text-foreground">sales@royscan.com.sg</a>
                </p>
             </div>
          </div>
          
          <div className="space-y-3 text-sm">
            <h3 className="font-headline text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/services" className="hover:text-foreground">
                Services
              </Link>
              <Link href="/certifications" className="hover:text-foreground">
                Certifications
              </Link>
              <Link href="/projects" className="hover:text-foreground">
                Projects
              </Link>
               <Link href="/team" className="hover:text-foreground">
                Our Team
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
