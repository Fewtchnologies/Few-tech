'use client'
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'App Development',
    description: `We specialize in building mobile applications that are both robust and user-friendly. Whether it's iOS or Android, our app development team creates seamless, high-performance solutions tailored to meet your business needs. Our expertise spans across various industries and we employ technologies to ensure your app is not only functional but also visually appealing. From initial concept to deployment and maintenance, we provide comprehensive app development services that drive results and enhance user engagement.`,
    imageUrl: './assets/AppD.png',
  },
  {
    title: 'Web Development',
    description: `From websites to complex web applications, we deliver fast, scalable, and responsive solutions. Using the latest technologies, we ensure your web presence stands out and provides the best user experience. Our team handles everything from front-end design to back-end development, creating feature-rich and secure web solutions. We focus on building websites that are not only aesthetically pleasing but also easy to navigate and optimized for all devices. Whether you need an eCommerce platform, a corporate site, or a custom web app, we have the skills and experience to make your vision a reality.`,
    imageUrl: './assets/WebD.png',
  },
  {
    title: 'AI Integration',
    description: `Harness the power of artificial intelligence to drive innovation in your business. We help integrate AI-powered tools, from chatbots to predictive analytics, enabling smarter decision-making and operational efficiency. Our AI solutions are designed to automate processes, enhance customer experiences, and provide deep insights into your data. Whether you're looking to implement machine learning algorithms, natural language processing, or computer vision, our team can develop tailored AI solutions that meet your specific requirements and help you stay ahead of the competition.`,
    imageUrl: './assets/AI.png',
  },
  {
    title: 'UI/UX Design',
    description: `Our design team crafts intuitive, engaging, and aesthetically pleasing user interfaces that ensure a smooth user experience. We focus on creating designs that align with your brand and cater to the needs of your target audience. Our UI/UX design process involves extensive research, wireframing, prototyping, and user testing to ensure the final product is both functional and delightful to use. From mobile apps to web platforms, we create designs that are not only visually stunning but also easy to use, ensuring your users have the best possible interaction with your product.`,
    imageUrl: './assets/UI.png',
  },
  {
    title: 'VFX',
    description: `Our VFX services bring your creative vision to life, whether it's for films, commercials, or digital media. Using cutting-edge technology, we create visually stunning effects that captivate and engage your audience. Our team of skilled artists and technicians can handle everything from CGI and compositing to motion capture and 3D animation. We work closely with clients to understand their vision and deliver VFX that exceed expectations, enhancing the storytelling and visual impact of their projects.`,
    imageUrl: './assets/VFX.png',
  },
];

export default function ServicePage() {
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
            Our Services
          </h1>
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } items-center`}
            >
              <div className="md:w-1/2 p-4">
                <motion.h2
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {service.title}
                </motion.h2>
                <p
                  className="text-gray-300 text-sm sm:text-lg lg:text-xl"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {service.description.slice(0, 200)}
                  <span className="hidden sm:inline">
                    {service.description.slice(200)}
                  </span>
                </p>
              </div>
              
              <div className="md:w-1/2 p-4">
                <motion.img
                  src={service.imageUrl}
                  alt={service.title}
                  className="rounded-lg shadow-lg object-cover object-center w-full h-64 sm:h-80 md:h-96 lg:h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
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