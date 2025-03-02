import React, { useState } from 'react';
import bgImage from '../img/fruits.jpeg';

const RequirementsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  
  // Google Apps Script URL
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
    <div className="relative bg-[#36cb2a] flex items-center ">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15" 
        style={{
          backgroundImage: `url(${bgImage})`, 
          zIndex: 1
        }}
      />
      
      {/* Transparent Overlay */}
      <div 
        className="absolute inset-0 bg-white bg-opacity-30" 
        style={{ zIndex: 2 }}
      />
      
      {/* Content Container */}
      <div 
        className="container mx-auto px-2 lg:px-4 relative z-10" 
        style={{ zIndex: 3 }}
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6 md:p-14 text-center md:text-left">
            <h1 className="text-lg md:text-xl font-semibold mb-2">Stay Ahead with Us</h1>
            <h2 className="text-2xl md:text-4xl font-bold text-green-800">Submit Your Requirements Here...</h2>
          </div>
          
          <div className="w-full md:w-1/2 p-6 md:p-8">
            {/* Thank You Message */}
            {showThankYou && (
              <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
                Thank you for your submission!
              </div>
            )}
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-[20px] mb-1 block">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded border focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Name"
                />
                {errors.name && (
                  <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                )}
              </div>

              <div>
                <label className="text-[20px] mb-1 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded border focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Email"
                />
                {errors.email && (
                  <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                )}
              </div>
              
              <div>
                <label className="text-[20px] mb-1 block">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 rounded border focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Phone Number"
                />
                {errors.phone && (
                  <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
                )}
              </div>

              <div>
                <label className="text-[20px] mb-1 block">Requirements</label>
                <textarea
                  rows={4}
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  className="w-full p-2 rounded border focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Product Requirements"
                />
                {errors.requirement && (
                  <div className="text-red-500 text-sm mt-1">{errors.requirement}</div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 bg-green-800 text-white rounded hover:bg-green-700 transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementsForm;