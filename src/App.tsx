import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Navbar = lazy(() => import('./components/Navbar'))
const Hero = lazy(() => import('./components/Hero'))
const ServiceSection = lazy(() => import('./components/ServiceSection'))
const AboutSection = lazy(() => import('./components/AboutSection'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const CTASection = lazy(() => import('./components/CTASection'))
const Footer = lazy(() => import('./components/Footer'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))

function App() {
  const HomeContent = () => (
    <>
      <Hero />
      <ServiceSection />
      <AboutSection />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <CTASection />
    </>
  )

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen w-full bg-white">
        <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomeContent />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              {/* Fallback to home for unknown paths */}
              <Route path="*" element={<HomeContent />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App
