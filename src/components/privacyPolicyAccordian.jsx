import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
        {content.mainText && <p className="text-gray-700 mb-4">{content.mainText}</p>}
        {content.subSections && Array.isArray(content.subSections) && content.subSections.length > 0 && (
          content.subSections.map((section, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h4 className="font-medium text-gray-800 mb-2">{section.title}</h4>
              <ul className="space-y-2">
                {section.items && Array.isArray(section.items) && section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
);

const PrivacyPolicyAccordion = ({privacyData}) => {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {privacyData && privacyData.map((item) => (
          <AccordionItem
            key={item.id}
            title={item.title}
            content={item.content || { mainText: '', subSections: [] }}
            isOpen={openItem === item.id}
            onToggle={() => setOpenItem(openItem === item.id ? null : item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicyAccordion;