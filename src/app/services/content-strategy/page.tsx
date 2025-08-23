import { Metadata } from 'next';
import ContentStrategyClient from './ContentStrategyClient';

export const metadata: Metadata = {
  title: "AI-Enhanced Content Strategy | ContentOne",
  description: "Leverage AI to build a content strategy that drives results. We combine data-driven insights with artificial intelligence to create content that performs.",
  openGraph: {
    title: "AI-Enhanced Content Strategy | ContentOne",
    description: "Supercharge your content with our AI-driven strategies.",
    url: 'https://contentone.com.au/services/content-strategy',
  },
};

export default function ContentStrategyPage() {
  return <ContentStrategyClient />;
}