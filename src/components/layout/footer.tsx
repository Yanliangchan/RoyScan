import Link from 'next/link';

export default function AppFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Royscan Engineering Pte Ltd. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="/services" className="text-sm hover:underline">
            Services
          </Link>
          <Link href="/certifications" className="text-sm hover:underline">
            Certifications
          </Link>
          <Link href="/projects" className="text-sm hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="text-sm hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
