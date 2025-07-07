import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Magnet, Gem, Waves, Radiation, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const servicesList: Service[] = [
  {
    title: "Dye Penetrant Testing",
    description: "Detects surface-breaking defects in non-porous materials using liquid penetrant.",
    icon: FlaskConical,
  },
  {
    title: "Magnetic Particle Testing",
    description: "Identifies surface and near-surface discontinuities in ferromagnetic materials.",
    icon: Magnet,
  },
  {
    title: "Hardness Testing",
    description: "Measures material resistance to localized plastic deformation such as a scratch or indentation.",
    icon: Gem,
  },
  {
    title: "Ultrasonic Testing",
    description: "Uses high-frequency sound waves to detect internal flaws or characterize materials.",
    icon: Waves,
  },
  {
    title: "Radiography Testing",
    description: "Inspects materials for hidden flaws by using X-rays and gamma rays to see inside.",
    icon: Radiation,
  },
  {
    title: "Welding Inspection",
    description: "Ensures that welds meet all code and standard requirements for quality and safety.",
    icon: ShieldCheck,
  },
];

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Core Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            We provide a comprehensive range of non-destructive testing and inspection services.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service) => (
            <Card key={service.title} className="flex flex-col text-center items-center transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
