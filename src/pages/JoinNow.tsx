import { motion } from 'motion/react';
import { UserPlus, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function JoinNow() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    fitnessGoal: '',
    trainingTime: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Replace with actual backend API call
    // Example: await fetch('/api/membership', { method: 'POST', body: JSON.stringify(formData) });
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        fitnessGoal: '',
        trainingTime: '',
      });
    }, 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl text-black mb-6">
              Join <span className="text-[#FFD400]">Fit Camp Gym</span>
            </h1>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your fitness journey today! Fill out the form below and our team will contact you 
              within 24 hours to discuss your membership options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-8 md:p-12"
            >
              {/* Form Icon */}
              <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-8">
                <UserPlus className="w-8 h-8 text-black" />
              </div>

              <h2 className="text-3xl text-black text-center mb-8">Membership Application</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-black mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD400] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-black mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD400] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-black mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD400] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Age */}
                <div>
                  <label htmlFor="age" className="block text-black mb-2">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter your age"
                    required
                    min="16"
                    max="100"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD400] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Fitness Goal */}
                <div>
                  <label htmlFor="fitnessGoal" className="block text-black mb-2">
                    Fitness Goal <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="fitnessGoal"
                    name="fitnessGoal"
                    value={formData.fitnessGoal}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD400] focus:outline-none transition-colors duration-300 bg-white"
                  >
                    <option value="">Select your primary goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="general-fitness">General Fitness</option>
                    <option value="strength-training">Strength Training</option>
                    <option value="flexibility">Flexibility & Mobility</option>
                    <option value="sports-performance">Sports Performance</option>
                    <option value="rehabilitation">Rehabilitation</option>
                  </select>
                </div>

                {/* Preferred Training Time */}
                <div>
                  <label htmlFor="trainingTime" className="block text-black mb-2">
                    Preferred Training Time <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="trainingTime"
                    name="trainingTime"
                    value={formData.trainingTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD400] focus:outline-none transition-colors duration-300 bg-white"
                  >
                    <option value="">Select preferred time</option>
                    <option value="early-morning">Early Morning (5:00 AM - 8:00 AM)</option>
                    <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                    <option value="evening">Evening (5:00 PM - 9:00 PM)</option>
                    <option value="late-evening">Late Evening (9:00 PM - 11:00 PM)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#FFD400] text-black px-8 py-4 rounded-full hover:shadow-lg transition-shadow duration-300"
                >
                  Submit Application
                </button>

                {/* Privacy Note */}
                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                  We'll only use your information to contact you about your membership.
                </p>
              </form>
            </motion.div>
          ) : (
            /* Success Message */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-[#FFD400] rounded-2xl shadow-xl p-8 md:p-12 text-center"
            >
              <div className="w-20 h-20 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-3xl text-black mb-4">Thank You!</h2>
              <p className="text-xl text-gray-700 mb-4">
                Your application has been successfully submitted.
              </p>
              <p className="text-gray-600 mb-8">
                Our team will contact you soon to discuss your membership options and answer any questions 
                you may have. We're excited to help you start your fitness journey!
              </p>
              <div className="bg-[#F8F8F8] rounded-xl p-6">
                <p className="text-black mb-2">What happens next?</p>
                <ul className="text-left text-gray-700 space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFD400] mt-1">•</span>
                    <span>We'll review your application within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFD400] mt-1">•</span>
                    <span>A team member will call you to discuss membership plans</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFD400] mt-1">•</span>
                    <span>Schedule your free gym tour and fitness assessment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFD400] mt-1">•</span>
                    <span>Get started with your personalized fitness program</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-black mb-4">
              What You'll <span className="text-[#FFD400]">Get</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Free Fitness Assessment',
                description: 'Get a comprehensive evaluation of your current fitness level and personalized recommendations.',
              },
              {
                title: 'Personal Training Session',
                description: 'One complimentary session with a certified trainer to design your custom workout plan.',
              },
              {
                title: 'Gym Tour & Orientation',
                description: 'Learn how to use all equipment safely and discover the best features of our facility.',
              },
              {
                title: 'Nutrition Guidance',
                description: 'Basic nutritional advice to complement your workout routine and maximize results.',
              },
              {
                title: 'Mobile App Access',
                description: 'Track your progress, book classes, and stay connected with our community.',
              },
              {
                title: 'Community Support',
                description: 'Join a welcoming community of fitness enthusiasts who motivate and inspire each other.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-[#FFD400] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl text-white mb-4">
              Have Questions? <span className="text-[#FFD400]">We're Here to Help</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Call us at <a href="tel:+15551234567" className="text-[#FFD400] hover:underline">+1 (555) 123-4567</a> or 
              email <a href="mailto:info@fitcampgym.com" className="text-[#FFD400] hover:underline">info@fitcampgym.com</a>
            </p>
            <p className="text-sm text-gray-400">Monday - Friday: 5:00 AM - 11:00 PM | Saturday - Sunday: 6:00 AM - 10:00 PM</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
