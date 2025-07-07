import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center py-12 text-center lg:py-24">
          <div className="flex flex-col justify-center space-y-4 max-w-3xl">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
              Premier NDE & Inspection Services
            </h1>
            <p className="max-w-[600px] mx-auto text-foreground/80 md:text-xl">
              Royscan Engineering delivers unparalleled Non-Destructive Testing solutions, ensuring the integrity and safety of your critical assets with cutting-edge technology and expert analysis.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:opacity-90">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/team">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
