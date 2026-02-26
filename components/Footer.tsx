import { siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-sm text-white/20">
          Built with Next.js, Tailwind CSS &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}
