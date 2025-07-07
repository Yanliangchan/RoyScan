import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Mail } from "lucide-react";

const teamMembers = [
  { name: "Palika Gowrisanthosh", title: "Technical Director", avatar: "PG", phone: "+65 9455 1487", email: "santhosh@royscan.com.sg" },
  { name: "Oh Wooi Han", title: "Administrative Director", avatar: "OH", phone: "+65 9128 7066", email: "oh_wooihan@royscan.com.sg" },
  { name: "Chai Kok Chuan", title: "Sales Director", avatar: "CC", phone: "+65 9274 4876", email: "sales@royscan.com.sg" },
  { name: "Chong Wai Chung", title: "Secretary and Director", avatar: "CW", phone: null, email: "chong_waichung@royscan.com.sg" },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Key Personnel</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Our dedicated team of professionals is the backbone of our exceptional service.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center flex flex-col">
              <CardHeader className="items-center pb-4">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                <p className="text-primary font-medium">{member.title}</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center justify-center space-y-2 pt-0 text-sm">
                {member.phone && (
                  <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                    <Phone className="h-4 w-4" />
                    <span>{member.phone}</span>
                  </a>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                    <Mail className="h-4 w-4" />
                    <span className="break-all">{member.email}</span>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
