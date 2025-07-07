import { Card, CardContent, CardTitle } from "@/components/ui/card";
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
          {projectsList.map((project, index) => (
            <Card key={`${project.title}-${index}`} className="overflow-hidden transition-all hover:shadow-xl flex flex-col sm:flex-row items-center">
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
