import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import "./globals.css";
import Footer from "./_components/Footer";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

// Dynamically import the Header to prevent hydration errors on iOS
const Header = dynamic(() => import('./_components/Header'), {
  ssr: false,
  // A placeholder with the same height as the header to prevent layout shift
  loading: () => <header className="fixed top-0 left-0 right-0 z-50 h-20" />,
});

export const metadata: Metadata = {
  title: {
    default: "ContentOne | Performance-Driven Content Agency for Australian Businesses",
    template: "%s | ContentOne",
  },
  description: "We build content engines that convert. Partner with our data-driven content agency in Australia to transform your ideas into measurable ROI and remarkable growth.",
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
  icons: {
    icon: '/favicon.svg',
  },
};

// Replace self-hosted @font-face with next/font (Google Inter as primary UI font)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

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