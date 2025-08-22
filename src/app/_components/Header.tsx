'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/app/_lib/utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// A simple throttle function to limit how often a function can be called.
const throttle = (func: (...args: any[]) => void, limit: number) => {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const Header = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '/#services', id: 'services' },
    { name: 'Portfolio', href: '/portfolio', id: 'portfolio' },
    { name: 'Case Studies', href: '/#case-studies', id: 'case-studies' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (pathname === '/') {
        const sections = navItems.map(item => item.id).filter(id => id !== 'portfolio');
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
              setActiveSection(sectionId);
              return;
            }
          }
        }
        setActiveSection('');
      }
    };

    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [pathname, navItems]);

  useEffect(() => {
    if (pathname.startsWith('/portfolio')) {
      setActiveSection('portfolio');
    } else if (pathname === '/' && window.location.hash) {
      setActiveSection(window.location.hash.substring(1));
    } else if (pathname === '/') {
      setActiveSection('');
    }
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
          isScrolled ? 'bg-secondary/80 backdrop-blur-sm border-b border-graphite' : 'bg-transparent'
        )}
      >
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
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <Menu className="h-8 w-8 text-ivoire-mat" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-onyx-profond/95 backdrop-blur-lg"
          >
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60 rounded-md">
                    <Image src="/images/contentone-logo.webp" alt="ContentOne" width={192} height={48} sizes="192px" className="h-12 w-auto" />
                </Link>
                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                    <X className="h-8 w-8 text-ivoire-mat" />
                </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-[calc(100%-5rem)] space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'text-3xl font-bold transition-colors hover:text-indigo-electrique',
                    activeSection === item.id ? 'text-ivoire-mat' : 'text-acier-doux'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="btn btn-primary btn-lg text-2xl mt-8">
                Get a Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;