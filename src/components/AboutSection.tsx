import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission')

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B1F3B] mb-6">About Cloud Nexus</h2>
            <p className="text-lg text-gray-700 mb-6">
              Cloud Nexus is a premier digital transformation partner helping businesses navigate the complexities of modern technology. We combine technical expertise, industry knowledge, and innovative thinking to deliver solutions that drive tangible business results.
            </p>
            <div className="mb-8">
              <div className="mb-6">
                <div role="tablist" aria-label="About tabs" className="grid grid-cols-2 w-full rounded-lg p-1 bg-white">
                  <button
                    id="about-mission-tab"
                    role="tab"
                    aria-selected={activeTab === 'mission'}
                    aria-controls="about-mission-panel"
                    type="button"
                    onClick={() => setActiveTab('mission')}
                    className={`relative w-full px-4 py-2 md:px-5 md:py-2.5 font-medium md:font-semibold text-sm md:text-base text-center transition-colors border-0 bg-transparent appearance-none shadow-none focus:outline-none focus-visible:outline-none focus:ring-0 ${
                      activeTab === 'mission' ? 'text-[#1B1F3B]' : 'text-gray-600 hover:text-[#1B1F3B]'
                    }`}
                  >
                    {activeTab === 'mission' && (
                      <motion.span
                        layoutId="about-tab-indicator"
                        className="absolute inset-0 bg-blue-50"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">Our Mission</span>
                  </button>
                  <button
                    id="about-vision-tab"
                    role="tab"
                    aria-selected={activeTab === 'vision'}
                    aria-controls="about-vision-panel"
                    type="button"
                    onClick={() => setActiveTab('vision')}
                    className={`relative w-full px-4 py-2 md:px-5 md:py-2.5 font-medium md:font-semibold text-sm md:text-base text-center transition-colors border-0 bg-transparent appearance-none shadow-none focus:outline-none focus-visible:outline-none focus:ring-0 ${
                      activeTab === 'vision' ? 'text-[#1B1F3B]' : 'text-gray-600 hover:text-[#1B1F3B]'
                    }`}
                  >
                    {activeTab === 'vision' && (
                      <motion.span
                        layoutId="about-tab-indicator"
                        className="absolute inset-0 bg-blue-50"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">Our Vision</span>
                  </button>
                </div>
              </div>
              <div className="min-h-[100px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'mission' ? (
                    <motion.div
                      key="mission"
                      role="tabpanel"
                      id="about-mission-panel"
                      aria-labelledby="about-mission-tab"
                      className="text-gray-700"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>
                        Cloud Nexus' mission is to deliver diverse IT solutions suit focused on advanced data security, improving infrastructure efficiency, IT audit, advanced software development, and ensuring regulatory compliance for clients, helping them navigate the digital landscape securely.
                      </p>
                      <p className="mt-4 font-medium text-[#1B1F3B]">Our core focus areas are:</p>
                      <ul className="mt-3 space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>Data protection</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>Cloud computing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>Custom software development</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>Cybersecurity</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>IT Audit</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>IT Support</span>
                        </li>
                      </ul>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="vision"
                      role="tabpanel"
                      id="about-vision-panel"
                      aria-labelledby="about-vision-tab"
                      className="text-gray-700"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      Cloud Nexus' vision is to offer integrated services including strategic IT consultancy, precise cloud deployment, high-quality software development, cybersecurity and thorough IT systems audits. Our approach ensures businesses can leverage cloud technologies effectively, maintain robust software quality, protect data with precision and manage IT risks proactively.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <motion.a href="/about" className="inline-flex items-center text-[#2F80ED] font-medium hover:text-[#1B1F3B] transition-colors" whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
              Learn more about us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }}>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <motion.img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <motion.div className="absolute -bottom-8 -left-8 hidden md:block" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="bg-[#2F80ED] rounded-lg p-6 shadow-lg text-white max-w-xs">
                <p className="font-bold text-xl mb-2">7+ Years</p>
                <p>Combined industry experience in IT solutions</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection


