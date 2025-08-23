'use client';

import Image from 'next/image';
import React from 'react';
'use client';
import { useState, useMemo } from 'react';

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

const PortfolioView = () => {
  const videoProjects = [
    {
      id: 3,
      vimeoId: '1112182881',
      title: 'bad',
      description: 'UGC video content for social media campaigns.',
    },
    {
      id: 4,
      vimeoId: '1112181959',
      title: 'bad',
      description: 'UGC video content for social media campaigns.',
    },
    {
      id: 5,
      vimeoId: '1112181972',
      title: 'bad',
      description: 'UGC video content for social media campaigns.',
    },
    {
      id: 6,
      vimeoId: '1112179303',
      title: 'merve',
      description: 'UGC video content for social media campaigns.',
    },
  ];

  const photoProjects = [
    {
      id: 1,
      imageUrl: '/images/bad-workwear-logo.webp',
      alt: 'Photography for BAD Workwear',
      title: 'Apparel Photography',
      description: 'Apparel and shoe photography for BAD Workwear, crafted for e-commerce and campaigns. Clean, detailed, and always brand-ready.',
    },
    {
      id: 2,
      imageUrl: '/images/124-shoes-logo.webp',
      alt: 'Shoe photography',
      title: 'Shoe Photography',
      description: 'Detailed product visuals for 124 Shoes, optimized for online stores and catalogues.',
    },
    {
      id: 3,
      imageUrl: '/images/altea-logo.webp',
      alt: 'Photography for Altea',
      title: 'Brand Imagery',
      description: 'Creating visual content for Altea, aligned with their brand strategy to strengthen their market identity.',
    },
  ];

  return (
    <div className="bg-onyx-profond">
      {/* Intro Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-20 md:py-28 bg-secondary text-center"
      >
        <div className="container mx-auto px-4">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-satoshi font-bold text-ivoire-mat mb-4">
            Our <span className="text-gradient">Work</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-acier-doux max-w-3xl mx-auto font-inter">
            At ContentOne, we build campaigns that sell. From short-form video ads to brand-focused visuals, every piece of content is designed to capture attention and convert.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Projects Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="py-20 md:py-28"
      >
        <div className="container mx-auto px-4">

          {/* Video Sub-section */}
          <div className="mb-20 md:mb-28">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-satoshi font-bold text-center text-ivoire-mat mb-12">
              Video Ads & <span className="text-gradient">UGC Content</span>
            </motion.h2>
            <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
              {videoProjects.map((project) => (
                <motion.div variants={itemVariants} key={project.id} className="bg-secondary/50 rounded-xl border border-graphite overflow-hidden group">
                  <div className="aspect-video bg-onyx-profond">
                    <iframe
                      src={`https://player.vimeo.com/video/${project.vimeoId}`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={project.title}
                      className="transition-transform duration-500 group-hover:scale-105"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-satoshi font-bold text-ivoire-mat mb-2">{project.title}</h3>
                    <p className="text-acier-doux font-inter">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Photography Sub-section */}
          <div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-satoshi font-bold text-center text-ivoire-mat mb-12">
              Commercial <span className="text-gradient">Photography</span>
            </motion.h2>
            <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
              {photoProjects.map((project) => (
                <motion.div variants={itemVariants} key={project.id} className="bg-secondary/50 rounded-xl border border-graphite overflow-hidden group">
                  <div className="relative w-full h-80 bg-onyx-profond">
                    <Image
                      src={project.imageUrl}
                      alt={project.alt}
                      layout="fill"
                      objectFit="contain"
                      className="p-8 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-satoshi font-bold text-ivoire-mat mb-2">{project.title}</h3>
                    <p className="text-acier-doux font-inter">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </motion.section>
    </div>
  );
};

export default PortfolioView;
