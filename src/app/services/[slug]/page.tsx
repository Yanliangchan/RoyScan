import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }
  return {
    title: `${service.title} | Royscan Engineering`,
    description: service.shortDescription,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <section>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="outline">
              <Link href="/services" className="inline-flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to All Services
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                <service.icon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              {service.title}
            </h1>
          </div>
          <div className="space-y-6 text-lg text-foreground/80">
            {service.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
