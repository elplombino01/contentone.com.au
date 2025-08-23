
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, BarChart3, Bot } from 'lucide-react';

export const metadata: Metadata = {
  title: "AI-Enhanced Content Strategy | ContentOne",
  description: "Leverage AI to build a content strategy that drives results. We combine data-driven insights with artificial intelligence to create content that performs.",
  openGraph: {
    title: "AI-Enhanced Content Strategy | ContentOne",
    description: "Supercharge your content with our AI-driven strategies.",
    url: 'https://contentone.com.au/services/content-strategy',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const FeatureCard = ({ icon: Icon, title, children }) => (
    <motion.div variants={itemVariants} className="bg-secondary/50 p-6 rounded-xl border border-graphite">
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-indigo-electrique/10 p-3 rounded-full">
                <Icon className="w-6 h-6 text-indigo-electrique" />
            </div>
            <h3 className="text-xl font-satoshi font-bold text-ivoire-mat">{title}</h3>
        </div>
        <p className="text-acier-doux font-inter">{children}</p>
    </motion.div>
);

export default function ContentStrategyPage() {
  return (
    <div className="bg-onyx-profond text-ivoire-mat">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-20 md:py-28 text-center bg-secondary"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-electrique/10 border border-indigo-electrique/20 mb-6">
              <Bot className="w-5 h-5 text-indigo-electrique" />
              <span className="text-sm font-inter text-indigo-electrique">Our Services</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-satoshi font-bold mb-4">
            AI-Enhanced Content Strategy
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-acier-doux max-w-3xl mx-auto font-inter">
            We don't just write content. We build intelligent, data-driven content engines powered by AI to ensure every piece of content serves a purpose and delivers measurable ROI.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="py-20 md:py-28"
      >
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
                <FeatureCard title="Data-Driven Insights" icon={BarChart3}>
                    We start with a deep dive into your audience, competitors, and market trends. Our AI tools analyze thousands of data points to identify high-impact opportunities and predict what content will resonate most.
                </FeatureCard>
                <FeatureCard title="Predictive SEO" icon={Zap}>
                    Go beyond traditional keywords. We use AI to model search intent and identify the topics and questions your audience will have tomorrow, ensuring you capture traffic today and in the future.
                </FeatureCard>
                <FeatureCard title="Intelligent Content Mapping" icon={CheckCircle}>
                    We map every piece of content to a specific stage of the buyer's journey. Our AI-driven approach ensures you deliver the right message to the right person at the right time, maximizing conversion potential.
                </FeatureCard>
                <FeatureCard title="Performance Forecasting" icon={Bot}>
                    Before we even write a word, our models forecast the potential traffic, engagement, and conversion value of our proposed content strategy, giving you confidence in your investment.
                </FeatureCard>
            </div>
        </div>
      </motion.section>
    </div>
  );
}
