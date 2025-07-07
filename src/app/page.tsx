import HeroSection from "@/components/sections/hero";
import { services, certifications } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, Users, BadgeCheck, Atom } from "lucide-react";

const whyChooseUs = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our team of certified professionals brings decades of combined experience to every project, ensuring expert analysis and reliable results.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Quality",
    description: "With numerous accreditations like ISO 17025 and DNV approval, we adhere to the highest international standards of quality and safety.",
  },
  {
    icon: Atom,
    title: "Advanced Technology",
    description: "We utilize the latest NDE technologies and equipment to provide the most accurate and efficient inspection services in the industry.",
  }
];


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

      <section id="why-choose-us" className="bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Why Royscan Engineering?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
              Our commitment to quality, safety, and precision sets us apart.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
            {whyChooseUs.map((feature) => (
              <Card key={feature.title} className="flex flex-col text-center items-center">
                <CardHeader>
                   <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="home-cta" className="bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Certified & Trusted</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
                Our operations are accredited by leading international bodies, ensuring the highest standards of quality and reliability.
            </p>
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-4 items-center max-w-4xl mx-auto">
              {certifications.map((cert) => (
                <div key={cert.slug} className="flex justify-center" title={cert.title}>
                    <cert.icon className="h-12 w-12 text-muted-foreground transition-colors hover:text-primary" />
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
              <Button asChild size="lg">
                  <Link href="/certifications">
                      View All Certifications
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
