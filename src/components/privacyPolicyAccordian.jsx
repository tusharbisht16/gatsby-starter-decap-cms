import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const privacyData = [
  {
    id: 'data-collection',
    title: 'Data Collection & Usage',
    content: {
      mainText: 'We collect and process personal data in accordance with GDPR and applicable data protection laws.',
      subSections: [
        {
          title: 'Personal Information',
          items: [
            'Contact details (name, email, phone)',
            'Professional information',
            'Login credentials',
            'Payment information'
          ]
        },
        {
          title: 'Usage Data',
          items: [
            'Device information',
            'IP address',
            'Cookies and tracking data',
            'User behavior analytics'
          ]
        }
      ]
    }
  },
  {
    id: 'data-security',
    title: 'Security Measures',
    content: {
      mainText: 'Our security infrastructure employs industry-standard protocols and frameworks.',
      subSections: [
        {
          title: 'Technical Measures',
          items: [
            'End-to-end encryption',
            'Regular security audits',
            'Multi-factor authentication',
            'Automated threat detection'
          ]
        }
      ]
    }
  },
  {
    id: 'user-rights',
    title: 'Your Privacy Rights',
    content: {
      mainText: 'Under applicable data protection laws, you have certain rights regarding your personal data.',
      subSections: [
        {
          title: 'Core Rights',
          items: [
            'Right to access your data',
            'Right to rectification',
            'Right to erasure',
            'Right to data portability'
          ]
        }
      ]
    }
  },
  {
    id: 'compliance',
    title: 'Regulatory Compliance',
    content: {
      mainText: 'We maintain compliance with international data protection regulations.',
      subSections: [
        {
          title: 'Frameworks',
          items: [
            'GDPR compliance',
            'CCPA compliance',
            'ISO 27001 certification',
            'Privacy Shield Framework'
          ]
        }
      ]
    }
  }
];

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-150 focus:outline-none"
      onClick={onToggle}
    >
      <span className="text-lg font-semibold text-gray-800">{title}</span>
      <ChevronDown 
        className={`transform transition-transform duration-200 text-gray-600 ${
          isOpen ? 'rotate-180' : ''
        }`}
        size={20}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-200 ease-in-out ${
        isOpen ? 'max-h-[800px]' : 'max-h-0'
      }`}
    >
      <div className="p-6 bg-gray-50">
        <p className="text-gray-700 mb-4">{content.mainText}</p>
        {content.subSections.map((section, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <h4 className="font-medium text-gray-800 mb-2">{section.title}</h4>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PrivacyPolicyAccordion = () => {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {privacyData.map((item) => (
          <AccordionItem
            key={item.id}
            title={item.title}
            content={item.content}
            isOpen={openItem === item.id}
            onToggle={() => setOpenItem(openItem === item.id ? null : item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicyAccordion;