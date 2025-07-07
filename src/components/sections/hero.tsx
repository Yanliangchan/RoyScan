import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 xl:py-24">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
              Premier NDE & Inspection Services
            </h1>
            <p className="max-w-[600px] text-foreground/80 md:text-xl">
              Royscan Engineering delivers unparalleled Non-Destructive Testing solutions, ensuring the integrity and safety of your critical assets with cutting-edge technology and expert analysis.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:opacity-90">
                <Link href="#services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-xl lg:h-auto lg:aspect-square">
            <img
              alt="Engineering Blueprint"
              className="absolute h-full w-full object-cover"
              src="https://placehold.co/600x600.png"
              data-ai-hint="engineering blueprint"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
