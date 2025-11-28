import React from 'react'
import { Zap, Cloud, Shield, BarChart, Layers, Headphones } from 'lucide-react'
import { motion } from 'framer-motion'

const reasons = [
  { id: 1, title: 'Agile Development', icon: <Zap className="h-8 w-8 text-[#2F80ED]" />, description: 'Rapid, iterative approach to deliver value faster with flexibility to adapt to changing requirements.' },
  { id: 2, title: 'Cloud-Native Expertise', icon: <Cloud className="h-8 w-8 text-[#2F80ED]" />, description: 'Specialized knowledge in building and optimizing applications specifically for cloud environments.' },
  { id: 3, title: 'Security-First Mindset', icon: <Shield className="h-8 w-8 text-[#2F80ED]" />, description: 'Security integrated throughout our development process, not added as an afterthought.' },
  { id: 4, title: 'End-to-End Service', icon: <Layers className="h-8 w-8 text-[#2F80ED]" />, description: 'Comprehensive solutions from strategy and design through development, deployment and maintenance.' },
  { id: 5, title: 'Industry-Focused Solutions', icon: <BarChart className="h-8 w-8 text-[#2F80ED]" />, description: 'Tailored approaches based on deep understanding of industry-specific challenges and regulations.' },
  { id: 6, title: 'IT Support', icon: <Headphones className="h-8 w-8 text-[#2F80ED]" />, description: 'Responsive help desk, proactive monitoring, and seamless on-site/remote support to keep teams productive and systems healthy.' },
]

const WhyChooseUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1F3B] mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our approach combines technical excellence, industry knowledge, and a commitment to your success.</p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          {reasons.map((reason) => (
            <motion.div key={reason.id} className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-shadow" variants={itemVariants} whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}>
              <motion.div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50" whileHover={{ rotate: 5, scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                {reason.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[#1B1F3B] mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs


