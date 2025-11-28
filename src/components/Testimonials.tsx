import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    content: "Cloud Nexus transformed our legacy systems into a modern, cloud-based platform that's dramatically improved our operational efficiency. Their security-first approach gave us confidence throughout the migration process.",
    author: 'Sarah Johnson',
    title: 'CTO, FinTech Innovations',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    content: 'The custom software solution developed by Cloud Nexus has streamlined our workflow and reduced processing time by 40%. Their team was responsive, professional, and delivered exactly what we needed.',
    author: 'Michael Chen',
    title: 'Operations Director, Healthcare Solutions',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 3,
    content: 'After Cloud Nexus conducted our IT audit, we implemented their recommendations and saw immediate improvements in system performance and security posture. Their expertise was invaluable.',
    author: 'Rebecca Martinez',
    title: 'CISO, Retail Group International',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80',
  },
]

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  const prevTestimonial = () => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 300 : -300, opacity: 0 }),
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1B1F3B] to-[#2C3364] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">Don't just take our word for it. Here's what our clients have to say about working with Cloud Nexus.</p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div className="absolute top-0 left-0 h-16 w-16 text-[#2F80ED]/20 -translate-x-1/2 -translate-y-1/2" initial={{ opacity: 0, rotate: -10 }} whileInView={{ opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Quote className="h-16 w-16" />
            </motion.div>
            <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }}>
              <div className="min-h-[200px]">
                <AnimatePresence initial={false} custom={activeIndex}>
                  <motion.div key={activeIndex} custom={activeIndex} variants={variants as any} initial="enter" animate="center" exit="exit" transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}>
                    <p className="text-lg md:text-xl mb-8">{testimonials[activeIndex].content}</p>
                    <motion.div className="flex items-center" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.3 }}>
                      <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].author} className="w-14 h-14 rounded-full mr-4 object-cover" />
                      <div>
                        <p className="font-bold">{testimonials[activeIndex].author}</p>
                        <p className="text-gray-300">{testimonials[activeIndex].title}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
            <div className="flex justify-center mt-8 space-x-4">
              <motion.button onClick={prevTestimonial} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Previous testimonial" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <motion.button key={index} onClick={() => setActiveIndex(index)} className={`w-2.5 h-2.5 rounded-full ${index === activeIndex ? 'bg-[#2F80ED]' : 'bg-white/30 hover:bg-white/50'}`} aria-label={`Go to testimonial ${index + 1}`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} animate={index === activeIndex ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.5 }} />
                ))}
              </div>
              <motion.button onClick={nextTestimonial} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Next testimonial" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


