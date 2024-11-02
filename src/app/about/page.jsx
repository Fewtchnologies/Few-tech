"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen py-10 relative overflow-hidden">
      <BackgroundAnimation />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
      >

        <h1
          className="mt-14 text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold text-center mb-12"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}
        >
          About Us
        </h1>

        <div className="flex flex-col items-center">
          {/* CEO Section */}
          <div className="text-center mb-16 flex flex-col items-center">
            <Image
              src="/images/CEO.jpg"
              alt="CEO"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h2 className="text-3xl font-bold">Aditya Mandan</h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl">
              CEO & Founder of Few Technologies
            </p>
            <a
              href="https://www.linkedin.com/in/aditya-mandan-08a35b212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>

          {/* Social Media Section */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/company/few-technologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="text-blue-400 hover:text-blue-600"
              />
            </a>
            <a
              href="https://www.instagram.com/fewtechnologies?igsh=MWNpNzRzanp5b216eA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="text-pink-400 hover:text-pink-600"
              />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0143eb7bf85d560e0d?companyReference=1831232809335010620&mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faUpwork}
                size="2x"
                className="text-green-400 hover:text-green-600"
              />
            </a>
          </div>
        </div>

        <div className="space-y-20">
          <div>
            <motion.h2
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              IT Services
            </motion.h2>
            <p
              className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Our <span className="text-blue-400">IT services</span> cover a
              wide range of technological solutions to help your business stay
              competitive. From{" "}
              <span className="text-purple-400">software development</span> to
              network management, our team of experts is here to ensure that
              your IT infrastructure runs smoothly and efficiently. We provide{" "}
              <span className="text-blue-400">cloud solutions</span>,
              cybersecurity, and technical support to meet your unique business
              needs. Our comprehensive suite of IT services ensures that you can
              focus on your core business while we take care of your technology
              needs.
              <span className="hidden lg:inline">
                {" "}
                Our team utilizes the latest technologies and best practices to
                deliver solutions that are reliable, scalable, and tailored to
                your specific requirements.
              </span>
            </p>
          </div>
          <div>
            <motion.h2
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              IT Consulting
            </motion.h2>
            <p
              className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Our <span className="text-blue-400">IT consulting services</span>{" "}
              are designed to help you leverage technology to achieve your
              business goals. Whether you are looking to implement a new{" "}
              <span className="text-purple-400">IT strategy</span>, upgrade your
              existing systems, or explore new technologies, our consultants
              provide the expertise and guidance you need. We work closely with
              our clients to understand their unique challenges and develop
              customized solutions that drive innovation and growth. Our IT
              consulting services help you stay ahead of the curve in an
              ever-evolving technological landscape.
              <span className="hidden lg:inline">
                {" "}
                We provide strategic planning, system integration, and advanced
                technology recommendations to help you make informed decisions
                and optimize your IT investments.
              </span>
            </p>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

function BackgroundAnimation() {
  const circleVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: [0, 0.4, 0],
      scale: [0, 1, 1.5],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      ></motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-transparent to-black"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      ></motion.div>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 150}px`,
            height: `${Math.random() * 150}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.2,
          }}
          variants={circleVariants}
          initial="initial"
          animate="animate"
        />
      ))}
    </motion.div>
  );
}
