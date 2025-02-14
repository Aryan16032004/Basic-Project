import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative bg-[#001f3f] text-white py-20">
        <div className="absolute inset-0">
          <img 
            src="https://www.knbcollegeofeducation.org/wp-content/uploads/2016/04/contact-us-banner.jpg" 
            alt="Contact Banner" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Information</h1>
          <p className="max-w-2xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <button className="rounded-4xl mt-6 bg-[#ff4400] hover:bg-[#ff5500] px-6 py-2 rounded">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-2">Phone Number</h3>
            <div className="flex items-center text-gray-600">
              <Phone className="w-5 h-5 text-[#ff4400] mr-2" />
              +123 4567 8900
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-2">Email Address</h3>
            <div className="flex items-center text-gray-600">
              <Mail className="w-5 h-5 text-[#ff4400] mr-2" />
              example@iskul.com
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-2">Location</h3>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 text-[#ff4400] mr-2" />
              123 Business Avenue, NYC
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Message</h2>
          <p className="text-gray-600 mb-6">
            There are alterations in some ways in validation of passages of Lorem Ipsum available alteration in some form by injected.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 border rounded"
            />
            <button
              type="submit"
              className="rounded-4xl bg-[#ffa500] hover:bg-[#ffb200] text-white px-6 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">Find Us on Google Maps</h2>
          <p className="text-center text-gray-600 mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
          <div className="h-96 bg-gray-200 rounded-lg">
            <img 
              src="/api/placeholder/1200/400" 
              alt="Map" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#001f3f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">WEBIRENT</h2>
            <p className="text-gray-300 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Important Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Product', 'Solution', 'Pricing', 'Resources', 'Enterprise', 'Sales'].map((link) => (
                <a key={link} href="#" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe Us</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l text-gray-100"
              />
              <button className="bg-[#ffa500] px-4 py-2 rounded-r">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;