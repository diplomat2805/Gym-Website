import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Replace with actual backend API call
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
    
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form and message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 5000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl text-black mb-6">
              Get in <span className="text-[#FFD400]">Touch</span>
            </h1>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our gym, memberships, or programs? We'd love to hear from you. 
              Reach out and let's start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl text-black mb-8">Contact Information</h2>

                {/* Address */}
                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-14 h-14 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-black mb-2">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Fitness Street<br />
                      Wellness Plaza<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-14 h-14 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-black mb-2">Call Us</h3>
                    <p className="text-gray-600">
                      Main: <a href="tel:+15551234567" className="hover:text-[#FFD400] transition-colors">+1 (555) 123-4567</a><br />
                      Support: <a href="tel:+15551234568" className="hover:text-[#FFD400] transition-colors">+1 (555) 123-4568</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-14 h-14 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-black mb-2">Email Us</h3>
                    <p className="text-gray-600">
                      General: <a href="mailto:info@fitcampgym.com" className="hover:text-[#FFD400] transition-colors">info@fitcampgym.com</a><br />
                      Support: <a href="mailto:support@fitcampgym.com" className="hover:text-[#FFD400] transition-colors">support@fitcampgym.com</a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-black mb-2">Opening Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Mon - Fri: 5:00 AM - 11:00 PM</p>
                      <p>Saturday: 6:00 AM - 10:00 PM</p>
                      <p>Sunday: 7:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#F8F8F8] rounded-2xl p-8"
              >
                {!isSubmitted ? (
                  <>
                    <h2 className="text-3xl text-black mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-black mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD400] focus:outline-none transition-colors duration-300 bg-white"
                        />
                      </div>

                      {/* Email and Phone - Grid */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-black mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD400] focus:outline-none transition-colors duration-300 bg-white"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-black mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD400] focus:outline-none transition-colors duration-300 bg-white"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-black mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD400] focus:outline-none transition-colors duration-300 bg-white"
                        >
                          <option value="">Select a topic</option>
                          <option value="membership">Membership Inquiry</option>
                          <option value="personal-training">Personal Training</option>
                          <option value="group-classes">Group Classes</option>
                          <option value="facilities">Facilities & Equipment</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-black mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help you..."
                          required
                          rows={6}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD400] focus:outline-none transition-colors duration-300 resize-none bg-white"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-[#FFD400] text-black px-8 py-4 rounded-full hover:shadow-lg transition-shadow duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </button>
                    </form>
                  </>
                ) : (
                  /* Success Message */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-3xl text-black mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-700 mb-4">
                      Thank you for contacting Fit Camp Gym. We've received your message and will 
                      get back to you within 24 hours.
                    </p>
                    <p className="text-gray-600">
                      For urgent matters, please call us at <a href="tel:+15551234567" className="text-[#FFD400] hover:underline">+1 (555) 123-4567</a>
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-black mb-4">
              Find <span className="text-[#FFD400]">Us</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
            <p className="text-gray-600">
              Located in the heart of New York City, easily accessible by car or public transport
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center shadow-lg"
          >
            {/* Map Placeholder */}
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#FFD400] mx-auto mb-4" />
              <p className="text-xl text-gray-600 mb-2">Interactive Map</p>
              <p className="text-gray-500">123 Fitness Street, Wellness Plaza, NY 10001</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-[#FFD400] text-black px-6 py-3 rounded-full hover:shadow-lg transition-shadow duration-300"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-white mb-4">
              Ready to Start Your <span className="text-[#FFD400]">Fitness Journey?</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Visit us for a free tour and consultation. See our facilities and meet our team!
            </p>
            <a
              href="/join-now"
              className="bg-[#FFD400] text-black px-8 py-4 rounded-full hover:shadow-xl transition-shadow duration-300 inline-block"
            >
              Schedule a Visit
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
