"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/projects', label: 'Projects' },
  { href: '/team', label: 'Our Team' },
];

const Logo = () => (
  <svg
    className="h-8 w-8"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="50"
      cy="50"
      rx="48"
      ry="45"
      stroke="#D42A2A"
      strokeWidth="4"
      fill="none"
    />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="hsl(var(--primary))"
      fontSize="40"
      fontWeight="bold"
      fontFamily="Space Grotesk, sans-serif"
    >
      RS
    </text>
  </svg>
);


export default function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled || isMobileMenuOpen ? "bg-card/80 backdrop-blur-lg border-b" : "bg-card/0"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
          <Logo />
          <span className="text-xl font-bold font-headline text-primary">Royscan Engineering</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname.startsWith(link.href) ? "text-foreground" : "text-foreground/60"
              )}>
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                  <Logo />
                  <span className="text-xl font-bold font-headline text-primary">Royscan Engineering</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium" onClick={closeMobileMenu}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
