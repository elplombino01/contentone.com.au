import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Inter } from "next/font/google";
// Guard Satoshi local font until files exist (no import of next/font/local to avoid module resolution)

export const metadata: Metadata = {
  title: {
    default: "ContentOne - Performance-Driven Content Agency",
    template: "%s | ContentOne",
  },
  description: "Transform your content into performance-driven assets that deliver measurable results. Data-driven strategies for ambitious brands.",
  keywords: ["content agency", "content strategy", "performance marketing", "brand development", "content creation", "digital marketing", "SEO optimization", "content marketing"],
  authors: [{ name: "François Vaccarello", url: "https://contentone.com.au" }],
  creator: "ContentOne",
  publisher: "ContentOne",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://contentone.com.au'),
  openGraph: {
    title: "ContentOne - Performance-Driven Content Agency",
    description: "Transform your content into performance-driven assets that deliver measurable results. Data-driven strategies for ambitious brands.",
    url: "https://contentone.com.au",
    siteName: "ContentOne",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ContentOne - Performance-Driven Content Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ContentOne - Performance-Driven Content Agency",
    description: "Transform your content into performance-driven assets that deliver measurable results. Data-driven strategies for ambitious brands.",
    creator: "@contentone",
    images: ["/images/twitter-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Replace self-hosted @font-face with next/font (Google Inter as primary UI font)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});

/**
 * Satoshi via next/font/local — deferred: font files are not present yet.
 * Keep a placeholder so html className usage remains stable.
 * When ready, replace this block with a real localFont(...) declared at module scope.
 */
const satoshi = { variable: "" } as { variable: string };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Satoshi variable already guarded above; no runtime registration needed here.

  // Site-wide breadcrumb (can be enhanced with route segments later)
  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "/" }
    ]
  };

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ContentOne",
    "alternateName": "ContentOne Performance-Driven Content Agency",
    "url": "https://contentone.com.au",
    "logo": "/images/og-image.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61-3-9018-7516",
      "contactType": "customer service",
      "email": "hello@contentone.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Collins Street",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "postalCode": "3000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.8136,
      "longitude": 144.9631
    },
    "founder": {
      "@type": "Person",
      "name": "François Vaccarello",
      "jobTitle": "Content Strategist",
      "image": "/images/Francois photo .webp"
    },
    "description": "Transform your content into performance-driven assets that deliver measurable results. Data-driven strategies for ambitious brands.",
    "sameAs": [
      "https://twitter.com/contentone",
      "https://linkedin.com/company/contentone",
      "https://instagram.com/contentone"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Australia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Content Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Strategy",
            "description": "Data-driven content planning and execution"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Marketing",
            "description": "ROI-focused campaigns across all channels"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Development",
            "description": "Building memorable brands that convert"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Content",
            "description": "Strategy-backed video content for all platforms"
          }
        }
      ]
    },
    "openingHours": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
      <head>
        {/* PWA / Icons */}
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Prefer high-DPI SVG for modern browsers */}
        <link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
        {/* PNG fallbacks for platforms that require raster icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
        {/* Canonical */}
        <link rel="canonical" href="https://contentone.com.au" />
        {/* Preload critical fonts */}
        {/* Preconnect to important origins */}
        <link rel="preconnect" href="https://contentone.com.au" />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
        />
        {/* Basic analytics + consent (placeholder, non-blocking) */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            if(typeof window==='undefined') return;
            // Simple consent gate placeholder (no UI, respects Do Not Track)
            var dnt = navigator.doNotTrack=='1' || window.doNotTrack=='1';
            if(dnt) return;
            // Example: window.dataLayer = window.dataLayer || [];
            // function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'GA_MEASUREMENT_ID', { anonymize_ip: true });
          })();
        `}} />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-ivoire-mat focus:text-onyx-profond focus:rounded-md focus:shadow-lg"
        >
          Skip to content
        </a>
        <Header />
        {/* Ensure one top-level H1 semantics without placing headings inside <head> */}
        <main id="main-content" role="main" tabIndex={-1} aria-labelledby="page-title">
          <h1 id="page-title" className="sr-only">ContentOne - Performance-Driven Content Agency</h1>
          {children}
        </main>

        {/* Back-to-top button (global) */}
        <button
          id="backToTop"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 hidden items-center justify-center rounded-full bg-indigo-electrique text-ivoire-mat shadow-glow w-12 h-12 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique"
        >
          ↑
        </button>
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            if(typeof window==='undefined') return;
            var btn = document.getElementById('backToTop');
            if(!btn) return;
            var last = 0;
            function onScroll(){
              var y = window.scrollY || document.documentElement.scrollTop;
              // show after 480px
              if(y > 480){
                if(btn.classList.contains('hidden')){
                  btn.classList.remove('hidden');
                  btn.style.opacity = '0';
                  requestAnimationFrame(function(){ btn.style.opacity = '1'; });
                }
              } else {
                btn.style.opacity = '0';
                setTimeout(function(){ if((window.scrollY||document.documentElement.scrollTop) <= 480){ btn.classList.add('hidden'); } }, 200);
              }
              last = y;
            }
            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
            btn.addEventListener('click', function(e){
              e.preventDefault();
              try {
                window.scrollTo({ top: 0, behavior: (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) ? 'auto' : 'smooth' });
              } catch(e){
                window.scrollTo(0,0);
              }
            });
          })();
        `}} />

        <Footer />
      </body>
    </html>
  );
}
