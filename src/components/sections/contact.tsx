import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Building, Printer } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            We are here to assist you. Contact us through any of the channels below.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2"><Building className="h-6 w-6 text-primary" /> ROYSCAN ENGINEERING PTE LTD</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground/80 text-lg">
                     <p className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <span>1 Sunview Road, #05-39 Eco-Tech@Sunview, Singapore 627615</span>
                     </p>
                     <p className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <a href="tel:+6568731811" className="hover:underline">Tel: +65 6873 1811</a>
                     </p>
                     <p className="flex items-center gap-3">
                        <Printer className="h-5 w-5 text-primary" />
                        <span>Fax: +65 6873 2835</span>
                     </p>
                     <p className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <a href="mailto:sales@royscan.com.sg" className="hover:underline">sales@royscan.com.sg</a>
                     </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
