import { BadgeCheck } from "lucide-react";

const certificationsList = ["SINGLAS", "DNV", "ABS", "ASMI"];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Accreditations & Certifications</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            We are certified by leading international bodies, a testament to our commitment to quality.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {certificationsList.map((cert) => (
              <div key={cert} className="flex flex-col items-center justify-center gap-2">
                <BadgeCheck className="h-12 w-12 text-primary" />
                <p className="text-lg font-semibold">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
