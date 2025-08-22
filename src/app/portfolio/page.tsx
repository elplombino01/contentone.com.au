import { Metadata } from 'next';
import PortfolioView from './portfolio-view';

export const metadata: Metadata = {
  title: "Our Work - Portfolio of ContentOne",
  description: "Discover our work in video ads, UGC content, and commercial photography. We help brands captivate their audience and drive results.",
  openGraph: {
    title: "Our Work - Portfolio of ContentOne",
    description: "Explore our successful campaigns in video and photography.",
    url: 'https://contentone.com/portfolio', // Remplacez par l'URL de votre site une fois déployé
    images: [
      {
        url: '/images/og-image.svg', // Assurez-vous que cette image existe dans /public/images
        width: 1200,
        height: 630,
        alt: 'ContentOne Portfolio',
      },
    ],
    siteName: 'ContentOne',
    type: 'website',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Work - Portfolio of ContentOne",
    description: "Discover our work in video ads, UGC content, and commercial photography.",
    images: ['/images/twitter-image.svg'], // Assurez-vous que cette image existe dans /public/images
  },
};

const PortfolioPage = () => {
  return <PortfolioView />;
};

export default PortfolioPage;
