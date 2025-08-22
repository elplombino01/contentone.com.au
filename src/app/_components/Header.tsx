'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/app/_lib/utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Services", href: "/#services", id: "services" },
    { name: "Portfolio", href: "/portfolio", id: "portfolio" },
    { name: "Case Studies", href: "/#case-studies", id: "case-studies" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = ["services", "case-studies", "contact"];
      const scrollPosition = window.scrollY + 100;

      if (pathname === '/') {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveSection(section);
              return;
            }
          }
        }
        setActiveSection('');
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname.startsWith('/portfolio')) {
      setActiveSection('portfolio');
    } else if (pathname === '/' && window.location.hash) {
      setActiveSection(window.location.hash.substring(1));
    } else if (pathname === '/') {
      setActiveSection('');
    }
  }, [pathname]);

  return (
    <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-secondary/80 backdrop-blur-sm border-b border-graphite"
            : "bg-transparent"
        }`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60 rounded-md">
          <Image src="/images/contentone-logo.webp" alt="ContentOne" width={192} height={48} sizes="192px" className="h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-lg font-medium transition-colors hover:text-indigo-electrique',
                activeSection === item.id ? 'text-ivoire-mat' : 'text-acier-doux'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <a href="/#contact" className="btn btn-primary hidden md:inline-flex">
          Get a Quote
        </a>
      </div>
    </motion.header>
  );
};

export default Header;