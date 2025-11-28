import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CTASection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [consentChecked, setConsentChecked] = useState(false)

  useEffect(() => {
    const open = () => {
      setIsSubmitted(false)
      setConsentChecked(false)
      setIsOpen(true)
    }
    const handleHash = () => {
      if (window.location.hash === '#contact') {
        open()
        const el = document.getElementById('contact')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    window.addEventListener('open-contact-modal', open as EventListener)
    window.addEventListener('hashchange', handleHash)
    // Open immediately if hash already present
    handleHash()
    return () => {
      window.removeEventListener('open-contact-modal', open as EventListener)
      window.removeEventListener('hashchange', handleHash)
    }
  }, [])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const form = e.currentTarget
      const data = new FormData(form)
      const payload = {
        name: String(data.get('name') || '').trim(),
        email: String(data.get('email') || '').trim(),
        company: String(data.get('company') || '').trim(),
        phone: String(data.get('phone') || '').trim(),
        message: String(data.get('message') || '').trim(),
        consent: Boolean(data.get('consent')),
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.error || 'Failed to send message')
      }

      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="bg-gradient-to-br from-[#1B1F3B] to-[#2C3364] rounded-2xl overflow-hidden shadow-xl" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 relative z-10">
              <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p className="text-lg text-gray-200 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                Schedule a free consultation with our solution architects to discuss your digital transformation needs.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                <motion.button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false)
                    setConsentChecked(false)
                    setIsOpen(true)
                  }}
                  className="px-8 py-3 bg-[#2F80ED] hover:bg-blue-600 text-white font-medium rounded-md transition-colors text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Talk to a Solution Architect
                </motion.button>
              </motion.div>
            </div>
            <motion.div className="relative hidden lg:block min-h-[320px] xl:min-h-[420px] z-0" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.7,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B1F3B] to-transparent z-0"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex items-end sm:items-center justify-center px-4 py-6 sm:p-6">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              className="w-full sm:max-w-lg md:max-w-xl bg-white rounded-t-2xl sm:rounded-xl shadow-2xl overflow-hidden max-h-[88vh] sm:max-h-[80vh] flex flex-col"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 id="contact-modal-title" className="text-xl font-semibold text-[#1B1F3B]">
                      Talk to a Solution Architect
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Share a few details and we’ll get back within one business day.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close contact form"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="pl-5 pr-6 py-5 sm:pl-6 sm:pr-8 sm:py-6 overflow-y-auto">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="mt-4 text-lg font-semibold text-[#1B1F3B]">Thanks! We’ve got your request.</h4>
                    <p className="mt-1 text-gray-600">We’ll reach out shortly to schedule your consultation.</p>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="px-5 py-2.5 bg-[#2F80ED] hover:bg-blue-600 text-white font-medium rounded-md transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="min-w-0">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-300 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED] px-3 py-2 text-gray-900 placeholder-gray-400"
                        placeholder="Full name"
                      />
                    </div>
                    <div className="min-w-0">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Work email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-300 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED] px-3 py-2 text-gray-900 placeholder-gray-400"
                        placeholder="Work email"
                      />
                    </div>
                    <div className="min-w-0">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className="mt-1 block w-full rounded-lg border border-gray-300 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED] px-3 py-2 text-gray-900 placeholder-gray-400"
                        placeholder="Company"
                      />
                    </div>
                    <div className="min-w-0">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="mt-1 block w-full rounded-lg border border-gray-300 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED] px-3 py-2 text-gray-900 placeholder-gray-400"
                        placeholder="Phone (optional)"
                      />
                    </div>
                    <div className="md:col-span-2 min-w-0">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-1 block w-full rounded-lg border border-gray-300 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED] px-3 py-2 text-gray-900 placeholder-gray-400"
                        placeholder="Briefly describe your goals or challenges…"
                      />
                    </div>
                    <div className="md:col-span-2 flex items-center gap-2">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        required
                        checked={consentChecked}
                        onChange={(e) => setConsentChecked(e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-[#2F80ED] focus:ring-[#2F80ED]"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        You agree to be contacted about your request.
                      </label>
                    </div>
                    <div className="md:col-span-2 mt-1 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting || !consentChecked}
                        className="px-5 py-2.5 rounded-md bg-[#2F80ED] hover:bg-blue-600 text-white font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending…' : 'Request consultation'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default CTASection


