import { certifications } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Accreditations & Certifications</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            We are certified by leading international bodies, a testament to our commitment to quality.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          {certifications.map((cert) => (
             <Link key={cert.slug} href={`/certifications/${cert.slug}`} className="group">
                <Card className="flex items-center h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                    <CardHeader className="p-6">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            <cert.icon className="h-8 w-8 text-primary" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 pl-0 flex-1">
                        <CardTitle className="font-headline text-xl">{cert.title}</CardTitle>
                        <p className="text-muted-foreground mt-2">{cert.shortDescription}</p>
                        <p className="text-sm font-semibold text-primary flex items-center mt-4">
                            Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </p>
                    </CardContent>
                </Card>
             </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
