import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B1F3B] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 box-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Cloud Nexus</h3>
            <p className="text-gray-300 mb-6">
              Digital transformation partners helping businesses navigate the complexities of modern technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#2F80ED] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#2F80ED] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#2F80ED] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#2F80ED] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/custom-software" className="text-gray-300 hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="/services/cloud-computing" className="text-gray-300 hover:text-white transition-colors">Cloud Computing</a></li>
              <li><a href="/services/cybersecurity" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</a></li>
              
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
            <li><a href="/services/data-protection" className="text-gray-300 hover:text-white transition-colors">Data Protection</a></li>
              <li><a href="/services/it-auditing" className="text-gray-300 hover:text-white transition-colors">IT Auditing</a></li>
              <li><a href="/services/it-support" className="text-gray-300 hover:text-white transition-colors">IT Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#2F80ED] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Serekunda<br />Banjul, The Gambia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#2F80ED] flex-shrink-0" />
                <a href="tel:+14155550123" className="text-gray-300 hover:text-white transition-colors">(+220) 673 8885</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#2F80ED] flex-shrink-0" />
                <a href="mailto:info@cloudnexus.tech" className="text-gray-300 hover:text-white transition-colors">info@cloudnexus.biz</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Cloud Nexus. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


