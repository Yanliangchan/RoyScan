import HeroSection from "@/components/sections/hero";
import { services } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <section id="home-services" className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Core Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
              We provide a comprehensive range of non-destructive testing and inspection services.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Card key={service.title} className="flex flex-col text-center items-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.shortDescription}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                View All Services <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="home-cta" className="bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Certified & Trusted</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
                Our operations are accredited by leading international bodies, ensuring the highest standards of quality and reliability.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <Button asChild size="lg">
                  <Link href="/certifications">
                      Our Certifications
                  </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                  <Link href="/projects">
                      View Projects
                  </Link>
              </Button>
            </div>
        </div>
      </section>
    </>
  );
}
