import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Plane, Ship, Factory } from 'lucide-react';

const projectsList = [
  {
    title: "Offshore Platform Inspection",
    client: "Marine Oil & Gas Co.",
    icon: Building
  },
  {
    title: "Aerospace Component Analysis",
    client: "AeroSpace Dynamics",
    icon: Plane
  },
  {
    title: "Ship Hull Integrity Testing",
    client: "Global Maritime Services",
    icon: Ship
  },
  {
    title: "Pipeline Weld Examination",
    client: "PetroChem Industries",
    icon: Factory
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Key Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            A glimpse into the diverse and critical projects we've successfully undertaken.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {projectsList.map((project) => (
            <Card key={project.title} className="overflow-hidden transition-all hover:shadow-xl flex flex-col sm:flex-row items-center">
                <div className="p-6 bg-primary/10 w-full sm:w-auto self-stretch flex items-center justify-center">
                    <project.icon className="h-12 w-12 text-primary mx-auto"/>
                </div>
              <CardContent className="p-6 flex-1">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground">Client: <span className="font-medium text-foreground">{project.client}</span></p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
