import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import img2 from "../img/world.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '' // This will store the message content
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  
  // Google Apps Script URL - same as the previous example
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwA9BJbPzEU_MxLinbY_cz7jQiVlzF0bRP3sEFqdwWhPr-32pfm_t14S4XG_OmFpWVfHQ/exec';

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    
    // Validate required fields
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        isValid = false;
      }
    });
    
    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Prepare form data for submission
      const formDataToSend = new FormData();
      
      // Add form fields to FormData
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      
      // Submit to Google Apps Script
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        // Show thank you message
        setShowThankYou(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          requirement: ''
        });
        
        // Hide thank you message after 3 seconds
        setTimeout(() => {
          setShowThankYou(false);
        }, 3000);
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Header Section */}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Image */}
        <div className="lg:w-1/2">
          <div className="relative lg:h-full">
            <img 
              src={img2}
              alt="World map digital visualization"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
            <div className="text-red-700">
              <h3 className="text-xl font-semibold">Any Question?</h3>
              <p className="text-lg">Write Down And Send Us</p>
            </div>
          </div>
          
          {/* Thank You Message */}
          {showThankYou && (
            <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name*"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.name && (
                <div className="text-red-500 text-sm mt-1">{errors.name}</div>
              )}
            </div>
            
            <div>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>
            
            <div>
              <input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.phone && (
                <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
              )}
            </div>
            
            <div>
              <textarea 
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                placeholder="Enter your message..."
                rows={6}
                className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.requirement && (
                <div className="text-red-500 text-sm mt-1">{errors.requirement}</div>
              )}
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-400"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-red-700" />
            <span className="font-semibold">Main Office</span>
          </div>
          <p className="mt-2 text-sm">Office No 4, Building No 1, Makane Gaon Bodanpada road Navkar complex 
          District Palghar, City Saphale, pin: 401102, Maharashtra, India
          </p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-red-700" />
            <span className="font-semibold">Make a Call</span>
          </div>
          <a 
            href="tel:+919225385403" 
            target='_blank'
          >
            <p className="mt-2 text-sm">+91 92253 85403</p>
          </a>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-red-700" />
            <span className="font-semibold">Send a Mail</span>
          </div>
          <a target='_blank' href="mailto:info@riddhisiddhitrader.com">
            <p className="mt-2 text-sm">info@riddhisiddhitrader.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;