import React, { useState } from 'react'
import { Code, Cloud, Shield, Database, FileSpreadsheet, Headphones } from 'lucide-react'
import { motion } from 'framer-motion'

const CustomSoftwareDescription: React.FC = () => {
  const [expanded, setExpanded] = useState(false)
  const brief = "Cloud Nexus offers a bespoke approach, using agile processes to design software that fits each business's unique needs, ensuring innovation and efficiency."
  const fullRest = ' From initial consultation to deployment, Cloud Nexus offers bespoke software development, project management, and sector-specific innovations. Businesses face unique challenges that off-the-shelf solutions can\'t address. We focus on crafting tailored software for each unique need.'

  return (
    <>
      <div className="relative mb-3">
        <p
          id="custom-software-description"
          className={`text-gray-600 whitespace-pre-line transition-[max-height] duration-300 overflow-hidden ${expanded ? 'max-h-[1000px]' : 'max-h-24'}`}
        >
          {brief}
          {expanded && fullRest}
        </p>
        {!expanded && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent"></div>
        )}
      </div>
      <motion.button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="bg-transparent border-0 p-0 text-[#2F80ED] font-medium hover:text-[#1B1F3B] inline-flex items-center gap-1.5 transition-colors no-underline focus:outline-none focus-visible:outline-none focus:ring-0 active:opacity-80"
        aria-expanded={expanded}
        aria-controls="custom-software-description"
        whileHover={{ x: 5 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        {expanded ? 'Show less' : 'Read more'}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </>
  )
}

const ExpandableDescription: React.FC<{ text: string; id: string }> = ({ text, id }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <div className="relative mb-3">
        <p
          id={id}
          className={`text-gray-600 whitespace-pre-line transition-[max-height] duration-300 overflow-hidden ${expanded ? 'max-h-[1000px]' : 'max-h-24'}`}
        >
          {text}
        </p>
        {!expanded && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent"></div>
        )}
      </div>
      <motion.button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="bg-transparent border-0 p-0 text-[#2F80ED] font-medium hover:text-[#1B1F3B] inline-flex items-center gap-1.5 transition-colors no-underline focus:outline-none focus-visible:outline-none focus:ring-0 active:opacity-80"
        aria-expanded={expanded}
        aria-controls={id}
        whileHover={{ x: 5 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        {expanded ? 'Show less' : 'Read more'}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </>
  )
}

const services = [
  {
    id: 1,
    title: 'Custom Software',
    icon: <Code className="h-10 w-10 text-[#2F80ED]" />,
    description: 'Cloud Nexus offers a bespoke approach, using agile processes to design software that fits each business\'s unique needs, ensuring innovation and efficiency.',
  },
  {
    id: 2,
    title: 'Cloud Computing',
    icon: <Cloud className="h-10 w-10 text-[#2F80ED]" />,
    description: 'Cloud Nexus specializes in designing custom cloud solutions that prioritize performance, security, and compliance. Our offerings adapt to changing business needs and technological advancements, focusing on bespoke cloud architectures, data security, and sustainable designs. We integrate features like dynamic load balancing, virtualization, data storage, cost optimization, scalability and compliance monitoring to create optimized, tailored ecosystems.',
  },
  {
    id: 3,
    title: 'Cybersecurity',
    icon: <Shield className="h-10 w-10 text-[#2F80ED]" />,
    description: 'In today\'s digital age, businesses face an escalating threat landscape. Cloud Nexus aims to transform cybersecurity by providing real-time threat monitoring and customized solutions. We ensure seamless data protection, privacy advocacy, and adherence to global compliance standards, empowering organizations to operate safely and resiliently in the cyber realm. Leveraging cutting-edge threat intelligence positions us at the forefront of cybersecurity innovation.',
  },
  {
    id: 4,
    title: 'Data Protection',
    icon: <Database className="h-10 w-10 text-[#2F80ED]" />,
    description: `Cutting-edge solutions for proactive data protection, featuring real-time replication and seamless integration for unmatched reliability.

Our state-of-the-art data protection solutions features online backup, automated recovery, secure replication, and hybrid cloud integration for ultimate dependability.

• Real-time data backup across platforms
• Rapid disaster recovery implementation
• Secure, automated data replication
• Local and cloud backup solutions`,
  },
  {
    id: 5,
    title: 'IT Auditing',
    icon: <FileSpreadsheet className="h-10 w-10 text-[#2F80ED]" />,
    description: 'Cloud Nexus addresses critical IT vulnerabilities through comprehensive auditing and tailored risk management solutions, ensuring robust cybersecurity across platforms. We offer a systematic auditing procedures, holistic infrastructure reviews, and detailed compliance documentation that engulf risk identification and control, ensuring no weak spots. Cloud Nexus structured audit processes guarantee consistent quality and reliable results every time, and our transparent, factual reports facilitate informed decision-making and strategic planning.',
  },
  {
    id: 6,
    title: 'IT Support',
    icon: <Headphones className="h-10 w-10 text-[#2F80ED]" />,
    description: `Comprehensive IT support that keeps your teams productive and your systems resilient.

From first‑day office IT setup and device provisioning to seamless cloud and on‑prem migrations, we handle the heavy lifting and ongoing care.

We provide responsive help desk coverage, proactive monitoring and patching, incident response, and tailored service plans—so every IT need is met with speed, clarity, and SLA‑driven reliability.`,
  },
]

const ServiceSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1F3B] mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Comprehensive digital transformation solutions to help your business thrive in the digital age.</p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          {services.map((service) => {
            const isCustom = service.title === 'Custom Software'
            return (
              <motion.div key={service.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6 flex flex-col" variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <motion.div className="mb-4" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-[#1B1F3B] mb-3">{service.title}</h3>
                {isCustom ? (
                  <CustomSoftwareDescription />
                ) : (
                  <ExpandableDescription
                    text={service.description}
                    id={`${service.title.toLowerCase().replace(' ', '-')}-description`}
                  />
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceSection


