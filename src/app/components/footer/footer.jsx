'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faUpwork } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/company/few-technologies/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-600 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/fewtechnologies?igsh=MWNpNzRzanp5b216eA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-600 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0143eb7bf85d560e0d?companyReference=1831232809335010620&mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-600 transition-colors duration-300"
            aria-label="Upwork"
          >
            <FontAwesomeIcon icon={faUpwork} size="2x" />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Few Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  )
}