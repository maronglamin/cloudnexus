import React from 'react'

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      {/* Compact hero header matching site hero styling */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-gradient-to-br from-[#1B1F3B] to-[#2C3364]">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'overlay',
            }}
          ></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-privacy" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-privacy)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Data Protection & Privacy Policy
            </h1>
            <p className="mt-3 text-gray-200 max-w-2xl">
              How Cloud Nexus collects, processes, stores, and protects personal data in line with the laws of The Gambia.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-px left-0 right-0 leading-[0]">
          <svg className="block w-full h-[64px] md:h-[96px]" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,40 C160,80 320,0 480,30 C640,60 800,20 960,40 C1120,60 1280,40 1440,60 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.6)" />
            <path d="M0,64 C160,74 320,90 480,80 C640,70 800,46 960,48 C1120,50 1280,66 1440,72 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Body content */}
      <section className="bg-white pb-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="prose prose-slate max-w-none prose-headings:text-[#1B1F3B] prose-a:text-[#2F80ED]">
          <p>
            This policy is aligned with the Information and Communications Act, 2009, the Access to Information Act,
            2021, and in anticipation of the full implementation of the Data Protection and Privacy Act, 2021.
          </p>
          <p>
            It applies to all personal data collected and processed by Cloud Nexus, whether in a digital or physical
            format, including data processed through our website, mobile applications, and all other business
            interactions. It is a mandatory policy for all Cloud Nexus employees, contractors, and any third parties who
            handle personal data on our behalf.
          </p>

          <h2>Definition of Key Words</h2>
          <ul>
            <li>
              <strong>Personal Data:</strong> Any information that relates to an identified or identifiable person. This
              includes names, identification numbers, location data, email addresses, and any other data that, alone or
              combined, can identify an individual.
            </li>
            <li>
              <strong>Processing:</strong> Any action performed on personal data, whether automated or not. This
              includes collection, recording, organization, structuring, storage, retrieval, consultation, use,
              disclosure, dissemination, or destruction.
            </li>
            <li>
              <strong>Data Controller:</strong> Cloud Nexus, as the entity that determines the purposes and means of
              processing personal data.
            </li>
            <li>
              <strong>Data Processor:</strong> A person or entity that processes personal data on behalf of Cloud Nexus.
            </li>
            <li>
              <strong>Regulatory Body:</strong> The Public Utilities Regulatory Authority (PURA) and any future Data
              Protection Commission designated under Gambian law.
            </li>
          </ul>

          <h2>Data Protection Principles</h2>
          <p>Cloud Nexus is committed to upholding the following principles when handling personal data:</p>
          <ul>
            <li>
              <strong>Lawfulness, Fairness, and Transparency:</strong> We collect and process personal data with a valid
              legal basis, in a fair and transparent manner.
            </li>
            <li>
              <strong>Purpose Limitation:</strong> Data is collected for specified, explicit, and legitimate purposes,
              and not processed in ways incompatible with those purposes.
            </li>
            <li>
              <strong>Data Minimisation:</strong> We collect only data that is adequate, relevant, and limited to what
              is necessary.
            </li>
            <li>
              <strong>Accuracy:</strong> We take reasonable steps to keep personal data accurate and up to date.
            </li>
            <li>
              <strong>Storage Limitation:</strong> We retain personal data only as long as necessary for the purposes
              collected, unless a longer period is required by law.
            </li>
            <li>
              <strong>Integrity and Confidentiality:</strong> We protect personal data from unauthorized access,
              accidental loss, destruction, or damage using appropriate technical and organizational measures.
            </li>
          </ul>

          <h2>Collection and Use of Personal Data</h2>
          <p>We collect personal data from you in the following ways and for these purposes:</p>
          <ul>
            <li>
              <strong>Client and Partner Data:</strong> Contact information, company details, and billing information to
              provide services, manage relationships, and comply with legal obligations.
            </li>
            <li>
              <strong>Employee and Candidate Data:</strong> Personal data for human resources, payroll, and recruitment
              purposes, including names, contact information, and educational and professional history.
            </li>
          </ul>

          <h2>Data Subject Rights</h2>
          <p>
            Under The Gambian legal framework, you have fundamental rights regarding your personal data. Cloud Nexus is
            committed to facilitating the exercise of these rights:
          </p>
          <ul>
            <li>
              <strong>Right to Information:</strong> To be informed about how and why your personal data is processed.
            </li>
            <li>
              <strong>Right of Access:</strong> To request access to the personal data we hold about you.
            </li>
            <li>
              <strong>Right to Rectification:</strong> To request correction of any inaccurate or incomplete personal
              data.
            </li>
            <li>
              <strong>Right to Object:</strong> To object to processing of your personal data for direct marketing.
            </li>
            <li>
              <strong>Right to Erasure:</strong> To request deletion of your personal data under certain circumstances
              (e.g., when it is no longer necessary for the purpose it was collected).
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact our Data Protection Officer/Chief Compliance Officer using
            the contact information provided below. We will respond within a reasonable timeframe as required by law.
          </p>

          <h2>Data Sharing and Transfers</h2>
          <p>
            Cloud Nexus will not sell or rent your personal data to third parties. We may share your data with trusted
            third parties who provide services on our behalf (e.g., cloud hosting, payment processing, professional
            services). These third parties are contractually bound to process the data only for the specified purposes
            and to maintain the same level of data security as Cloud Nexus.
          </p>
          <p>
            In the event of transferring data outside of The Gambia, we will ensure that the destination country has
            adequate data protection laws or that appropriate safeguards are in place, such as standard contractual
            clauses, to protect your personal data.
          </p>

          <h2>Data Security</h2>
          <p>Cloud Nexus is committed to protecting your personal data. We implement a variety of measures, including:</p>
          <ul>
            <li>
              <strong>Access controls:</strong> Limiting access to personal data to employees with a legitimate business
              need.
            </li>
            <li>
              <strong>Data encryption:</strong> Encrypting data in transit and at rest to prevent unauthorized access.
            </li>
            <li>
              <strong>Regular security audits:</strong> Conducting regular vulnerability assessments and penetration
              tests to identify and address security risks.
            </li>
            <li>
              <strong>Employee training:</strong> Ensuring all staff receive regular training on data protection and
              privacy best practices.
            </li>
          </ul>
          <p>
            In the event of a data breach that could result in a high risk to your rights and freedoms, we will notify
            the relevant Gambian authorities and affected individuals as required by law.
          </p>

          <h2>Contact Information</h2>
          <p>For any questions, concerns, or requests regarding this policy or our data processing practices, contact:</p>
          <ul>
            <li>
              <strong>Compliance:</strong> Chief Compliance Officer
            </li>
            <li>
              <strong>Email:</strong> compliance@cloudnexus.biz
            </li>
            <li>
              <strong>Address:</strong> Serrekunda, The Gambia
            </li>
          </ul>

          <h2>Policy Review and Updates</h2>
          <p>
            This policy will be reviewed and updated regularly to reflect changes in our business operations, new
            technologies, or the evolution of The Gambia&apos;s data protection laws. Any significant changes to this
            policy will be communicated through our website and, where appropriate, directly to our clients and
            partners.
          </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy


