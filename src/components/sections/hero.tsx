import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden bg-muted">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4 max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
            Engineering Integrity, Assured.
          </h1>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
            We deliver premier NDE & inspection services to safeguard your most critical assets with unmatched precision and reliability.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
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
