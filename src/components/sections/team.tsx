import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Palika Gowrisanthosh", title: "Managing Director", avatar: "PG" },
  { name: "Oh Wooi Han", title: "Technical Manager", avatar: "OH" },
  { name: "Chai Kok Chuan", title: "Operations Head", avatar: "CC" },
  { name: "Chong Wai Chung", title: "Quality Assurance Lead", avatar: "CW" },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Experts</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Our team of certified professionals is the backbone of our exceptional service.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center">
              <CardHeader className="items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={`https://placehold.co/100x100.png`} alt={member.name} data-ai-hint="professional headshot" />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">{member.avatar}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-lg">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary">{member.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
