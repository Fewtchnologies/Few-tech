'use client'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { AnimationControls } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const services = [
  {
    title: 'App Development',
    description: `Creating robust, user-friendly mobile applications for iOS and Android. Our team ensures high-performance solutions tailored to your business needs.`,
    imageUrl: '/assets/AppD.png',
  },
  {
    title: 'Web Development',
    description: `Delivering fast and scalable web solutions with exceptional user experience and responsive design. From front-end to back-end, we cover it all.`,
    imageUrl: '/assets/WebD.png',
  },
  {
    title: 'AI Integration',
    description: `Implementing AI-powered tools for smarter decision-making and increased operational efficiency. We provide tailored AI solutions to keep you ahead.`,
    imageUrl: '/assets/AI.png',
  },
  {
    title: 'UI/UX Design',
    description: `Crafting intuitive, visually pleasing interfaces that align with your brand and engage your audience. Every design is user-tested and optimized.`,
    imageUrl: '/assets/UI.png',
  },
  {
    title: 'VFX',
    description: `Bringing creative visions to life with cutting-edge visual effects for films, commercials, and digital media. Our VFX captivates and engages.`,
    imageUrl: '/assets/VFX.png',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      <BackgroundAnimation />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg mb-4 leading-tight pb-2"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Few Technologies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mt-6 text-lg sm:text-xl font-bold lg:text-2xl max-w-xl mx-auto text-gray-300 tracking-wide leading-relaxed"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Building the Future: Innovative Tech Services Tailored for Your Success
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full max-w-5xl mx-auto py-12 space-y-12">
        {services.map((service, index) => (
          <ServiceBlock key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  )
}

// Define the type for the service object
interface Service {
  title: string
  description: string
  imageUrl: string
}

interface ServiceBlockProps {
  service: Service
  index: number
}

function ServiceBlock({ service, index }: ServiceBlockProps) {
  const controls: AnimationControls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`flex flex-col md:flex-row ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      } items-center`}
    >
      <div className="md:w-1/2 p-4">
        <motion.h2
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {service.title === 'Web Development' ? (
            <Link href="/projects#web-development">{service.title}</Link>
          ) : (
            service.title
          )}
        </motion.h2>
        <p
          className="text-gray-300 text-sm sm:text-md lg:text-lg"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          {service.description}
        </p>
      </div>
      <div className="md:w-1/2 p-4">
        <Image
          src={service.imageUrl}
          alt={service.title}
          width={500}
          height={300}
          layout="responsive"
          className="rounded-[5%] shadow-lg object-cover w-full h-auto"
        />
      </div>
    </motion.div>
  );
}

function BackgroundAnimation() {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-70"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.5, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-70"
        animate={{
          x: [100, -100, 100],
          y: [100, -100, 100],
          scale: [1, 1.5, 1],
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
    </motion.div>
  )
}