'use client';

import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Transformez Votre Contenu en Croissance
        </h1>
        <p className="text-xl mb-8">
          Stratégies de contenu et SEO qui attirent, convertissent et fidélisent.
        </p>
        <Link href="/#contact">
          <a className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200">
            Contactez-moi
          </a>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
