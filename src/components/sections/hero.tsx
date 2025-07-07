import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
            src="https://placehold.co/1920x1080.png"
            alt="Engineering inspection"
            data-ai-hint="industrial engineering"
            fill
            className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4 max-w-3xl mx-auto">
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
    </section>
  );
}
