import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    Building, 
    Ship, 
    Wind,
    Zap,
    TrainFront,
    ShoppingCart,
    Landmark,
    Building2,
    Factory,
    Droplets,
    Recycle,
    Hotel,
    Fuel,
    Construction,
    Trees
} from 'lucide-react';

const projectsList = [
    { title: "FPSO JOHAN CASTBERG", client: "SEATRIUM (SG) PTE LTD", icon: Ship },
    { title: "ROPAX VESSEL", client: "SEATRIUM (SG) PTE LTD", icon: Ship },
    { title: "MAERSK WIND TURBINE INSTALLATION VESSEL", client: "SEATRIUM (SG) PTE LTD", icon: Wind },
    { title: "TENNET 2GW HIGH-VOLTAGE DIRECT CURRENT OFFSHORE GRID CONNECTION SYSTEMS", client: "ATLANTIC PROJECTS COMPANY PTE LTD", icon: Zap },
    { title: "SINGAPORE PARALLEL TRAIN PROJECT IN JURONG ISLAND", client: "ATLANTIC PROJECTS COMPANY PTE LTD", icon: TrainFront },
    { title: "PARAGON SHOPPING CENTRE", client: "G-TECH METAL PTE LTD", icon: ShoppingCart },
    { title: "SINGAPORE MRT - CIRCLE LINE", client: "HOE HOE ENGINEERING PTE LTD", icon: TrainFront },
    { title: "SENTOSA IR", client: "HOE HOE ENGINEERING PTE LTD", icon: Landmark },
    { title: "SAFRA CLUBHOUSE", client: "HOE HOE ENGINEERING PTE LTD", icon: Building2 },
    { title: "ORCHARD CENTRAL", client: "HOE HOE ENGINEERING PTE LTD", icon: Building2 },
    { title: "LUCITE ALPHA 1 IN JURONG ISLAND", client: "HQSM ENGINEERING PTE LTD", icon: Factory },
    { title: "CHANGI WATER RECLAIMATION PLANT - C3D", client: "KEPPEL SEGHERS ENGINEERING SINGAPORE PTE LTD", icon: Droplets },
    { title: "WASTE TO ENERGY PLANT @ TUAS", client: "KEPPEL SEGHERS ENGINEERING SINGAPORE PTE LTD", icon: Recycle },
    { title: "SENTOSA IR", client: "KONG HWEE IRON WORKS & CONSTRUCTION PTE LTD", icon: Landmark },
    { title: "NEX MALL@SERANGOON", client: "KONG HWEE IRON WORKS & CONSTRUCTION PTE LTD", icon: ShoppingCart },
    { title: "MARINE BAY SANDS HOTEL ATRIUM & ENTERTAINMENT POD", client: "KONG HWEE IRON WORKS & CONSTRUCTION PTE LTD", icon: Hotel },
    { title: "SINGAPORE ZOOLOGICAL", client: "KONG HWEE IRON WORKS & CONSTRUCTION PTE LTD", icon: Landmark },
    { title: "SENTOSA IR - UNIVERSAL STUDIOS SINGAPORE", client: "LBE ENGINEERING PTE LTD", icon: Landmark },
    { title: "SHELL EASTERN PETROLEUM / SEPC - MEG PROJECT", client: "ROTARY ENGINEERING LIMITED", icon: Fuel },
    { title: "NESTE OIL EXPANSION PROJECT", client: "SINOTCC (SINGAPORE) PTE LTD", icon: Fuel },
    { title: "SEMBCORP UTILITIES TERMINAL", client: "SEMBAWANG ENGINEERS & CONSTRUCTORS PTE LTD", icon: Factory },
    { title: "CHESTNUT AVE WATER WORKS", client: "SEMBAWANG ENGINEERS & CONSTRUCTORS PTE LTD", icon: Droplets },
    { title: "CHANGI WATER RECLAIMATION PLANT - EP3, C3B, C4B, C4C", client: "SEMBAWANG ENGINEERS & CONSTRUCTORS PTE LTD", icon: Droplets },
    { title: "MARINA IR", client: "TTJ DESIGN AND ENGINEERING PTE LTD", icon: Landmark },
    { title: "HENDERSON ROAD BRIDGE", client: "TTJ DESIGN AND ENGINEERING PTE LTD", icon: Construction },
    { title: "BURJ DUBAI DEVELOPMENT", client: "TTJ DESIGN AND ENGINEERING PTE LTD", icon: Building },
    { title: "MARINA SOUTH GARDENS PROJECT - SUPER TREES", client: "TTJ DESIGN AND ENGINEERING PTE LTD", icon: Trees },
    { title: "PINNACLE@DUXTON", client: "TTJ DESIGN AND ENGINEERING PTE LTD", icon: Building },
    { title: "REFLECTIONS AT KEPPEL BAY - CONDOMINIUM PROJECT", client: "TTJ DESIGN AND ENGINEERING PTE LTD", icon: Building },
];

const groupedProjects = projectsList.reduce((acc, project) => {
    if (!acc[project.client]) {
        acc[project.client] = [];
    }
    acc[project.client].push({ title: project.title, icon: project.icon });
    return acc;
}, {} as Record<string, { title: string; icon: any }[]>);


export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Key Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            A glimpse into the diverse and critical projects we've successfully undertaken for our valued clients.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {Object.entries(groupedProjects).map(([client, projects]) => (
                <Card key={client} className="flex flex-col transition-all hover:shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3">
                            <Building2 className="h-6 w-6 text-primary flex-shrink-0" />
                            {client}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 flex-grow">
                        <ul className="space-y-4">
                            {projects.map((project, index) => (
                                <li key={`${project.title}-${index}`} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 flex justify-center">
                                     <project.icon className="h-6 w-6 text-muted-foreground mt-0.5" />
                                    </div>
                                    <span className="text-foreground/90">{project.title}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
