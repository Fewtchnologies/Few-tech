'use client'

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "Tessaract (Blockchain-based Supply Chain Tracker)",
    description: "A decentralized application (dApp) for tracking products through the supply chain, ensuring transparency and authenticity.",
    imageUrl: "assets/projects/supplychain/img1.png",
    // github: "https://github.com/withrajatsharma/supply-chain",
  },
  {
    id: 2,
    title: "Coding Platform",
    description: "An educational coding platform, you can play with code in playground or compete with others in coding challenges.",
    imageUrl: "assets/projects/codingplatform/img1.png",
    // github: "https://github.com/Pheonixrog/Coding-Platform",
  },
  // {
  //   id: 3,
  //   title: "Portfolio",
  //   description: "A next.js portfolio website which showcases my skills and projects.",
  //   imageUrl: "assets/projects/portfolio/img1.png",
  //   github: "https://github.com/Pradyuman554/Portfolio",
  // }
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-black min-h-screen py-10 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="fixed top-0 left-0 w-full h-full z-0"
        >
          <BackgroundAnimation />
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1
            className="mt-14 text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold text-center mb-12"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#ffffff' }}
          >
            Projects
          </h1>
          <h1
            id="web-development"
            className="mt-14 text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold underline mb-12"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#ffffff' }}
          >
            Web Development
          </h1>
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-20">
          {projects.map((project, index) => (
            <ProjectSection key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectSection({ project, index }) {
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      } items-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="md:w-1/2 p-4">
        <Card className="overflow-hidden bg-gray-800 border-gray-700">
          <CardContent className="p-0">
            <img src={project.imageUrl} alt={project.title} className="w-full h-auto rounded-lg shadow-lg object-cover object-center" />
          </CardContent>
        </Card>
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4 text-purple-300">{project.title}</h2>
        <p className="text-gray-300 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-4">
          {project.github && (
            <Button className='bg-black' variant="outline" asChild>
              <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <span>Check it out!</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function BackgroundAnimation() {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      ></motion.div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-500 via-transparent to-black"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        }}
      ></motion.div>
    </motion.div>
  );
}