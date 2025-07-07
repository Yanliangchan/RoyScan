import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const projectsList = [
  {
    title: "Offshore Platform Inspection",
    client: "Marine Oil & Gas Co.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "oil rig"
  },
  {
    title: "Aerospace Component Analysis",
    client: "AeroSpace Dynamics",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "airplane engine"
  },
  {
    title: "Ship Hull Integrity Testing",
    client: "Global Maritime Services",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "ship hull"
  },
  {
    title: "Pipeline Weld Examination",
    client: "PetroChem Industries",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "industrial pipeline"
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projectsList.map((project) => (
            <Card key={project.title} className="overflow-hidden transition-all hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={`Image of ${project.title}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-[3/2]"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <CardContent className="p-6">
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
