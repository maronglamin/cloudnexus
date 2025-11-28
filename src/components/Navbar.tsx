import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleConsultationClick = () => {
    try {
      // If we're on home, just update hash and emit event
      if (window.location.pathname === '/') {
        if (window.location.hash !== '#contact') {
          window.location.hash = 'contact'
        }
        window.dispatchEvent(new CustomEvent('open-contact-modal'))
      } else {
        // Navigate to home and target the contact section
        window.location.href = '/#contact'
      }
    } catch {
      window.location.href = '/#contact'
    }
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/70 supports-[backdrop-filter]:bg-white/70 backdrop-blur border-b border-gray-200/60 shadow-sm py-2'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="flex items-center">
              <div className="mr-3 md:mr-4 h-12 w-12 md:h-16 md:w-16 rounded-full overflow-hidden bg-white ring-1 ring-white/60 shadow-sm shrink-0">
                <img
                  src="/cloud-nexus-logo.jpg"
                  alt="Cloud Nexus logo"
                  className="h-full w-full object-cover select-none"
                  width={128}
                  height={96}
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />
              </div>
              <span className={`text-3xl md:text-4xl font-heading font-bold tracking-tight ${isScrolled ? 'text-[#1B1F3B]' : 'text-white'}`}>Cloud Nexus</span>
            </a>
          </motion.div>
          <motion.div className="hidden md:block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <button
              type="button"
              onClick={handleConsultationClick}
              className="px-5 py-2.5 bg-[#2F80ED] hover:bg-[#1B1F3B] text-white font-medium rounded-md transition-colors"
            >
              Get a Consultation
            </button>
          </motion.div>
          <button
            type="button"
            onClick={handleConsultationClick}
            className={`md:hidden px-4 py-2 rounded-md font-medium ${isScrolled ? 'bg-[#2F80ED] text-white' : 'bg-white/10 text-white ring-1 ring-white/30'} transition-colors`}
          >
            Consultation
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar


