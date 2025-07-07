import { certifications } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export async function generateStaticParams() {
  return certifications.map((cert) => ({
    slug: cert.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const cert = certifications.find((c) => c.slug === params.slug);
  if (!cert) {
    return {
      title: 'Certification Not Found',
    }
  }
  return {
    title: `${cert.title} Certification | Royscan Engineering`,
    description: cert.shortDescription,
  }
}

export default function CertificationPage({ params }: { params: { slug: string } }) {
  const cert = certifications.find((c) => c.slug === params.slug);

  if (!cert) {
    notFound();
  }

  return (
    <section>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="outline">
              <Link href="/certifications" className="inline-flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to All Certifications
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                <cert.icon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              {cert.title} Certification
            </h1>
          </div>
          <div className="space-y-6 text-lg text-foreground/80">
            <p>{cert.longDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
