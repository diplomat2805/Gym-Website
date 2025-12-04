import { motion } from 'motion/react';
import { Target, Heart, Award, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
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
              About <span className="text-[#FFD400]">Fit Camp Gym</span>
            </h1>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your premier destination for fitness excellence, where dedication meets transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl text-black mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-[#FFD400] mb-6"></div>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Fit Camp Gym started with a simple mission: to create a fitness community 
                where everyone feels welcome, supported, and inspired to reach their full potential.
              </p>
              <p className="text-gray-700 mb-4">
                Over the past 15 years, we've grown from a small local gym to one of the most respected 
                fitness centers in the region. Our success is built on the dedication of our trainers 
                and the trust of our members.
              </p>
              <p className="text-gray-700">
                Today, we continue to innovate and expand our offerings, ensuring that we remain at the 
                forefront of the fitness industry while maintaining the personal touch that makes 
                Fit Camp Gym special.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1750698544894-1f012e37e5e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dHxlbnwxfHx8fDE3NjQ2NTQ1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gym facility"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Yellow Divider */}
      <div className="w-full h-1 bg-[#FFD400]"></div>

      {/* Mission & Vision */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl text-black mb-4">Our Mission</h3>
              <div className="w-20 h-1 bg-[#FFD400] mb-6"></div>
              <p className="text-gray-700">
                To empower individuals to achieve their fitness goals through expert guidance, 
                state-of-the-art facilities, and a supportive community. We strive to make fitness 
                accessible, enjoyable, and transformative for everyone who walks through our doors.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl text-black mb-4">Our Vision</h3>
              <div className="w-20 h-1 bg-[#FFD400] mb-6"></div>
              <p className="text-gray-700">
                To be the leading fitness destination recognized for excellence in training, 
                innovation in wellness programs, and creating lasting positive impacts on our 
                members' lives. We envision a healthier, stronger community built on dedication and support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-black mb-4">
              Our Core <span className="text-[#FFD400]">Values</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Excellence', description: 'We strive for the highest standards in everything we do.' },
              { title: 'Community', description: 'We build strong connections and support each other.' },
              { title: 'Integrity', description: 'We operate with honesty and transparency.' },
              { title: 'Innovation', description: 'We continuously improve and adapt to serve you better.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 border-2 border-gray-100 rounded-xl hover:border-[#FFD400] transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl text-black mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yellow Divider */}
      <div className="w-full h-1 bg-[#FFD400]"></div>

      {/* Gym Info */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-black mb-4">
              Visit <span className="text-[#FFD400]">Us</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl text-black mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-black mb-1">Address</h4>
                    <p className="text-gray-600">123 Fitness Street<br />Wellness Plaza<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-black mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-black mb-1">Email</h4>
                    <p className="text-gray-600">info@fitcampgym.com<br />support@fitcampgym.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Gym Timings */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#FFD400] rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl text-black">Gym Timings</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-black">Monday - Friday</span>
                  <span className="text-gray-600">5:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-black">Saturday</span>
                  <span className="text-gray-600">6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-black">Sunday</span>
                  <span className="text-gray-600">7:00 AM - 9:00 PM</span>
                </div>
                <div className="mt-6 p-4 bg-[#FFD400] rounded-lg">
                  <p className="text-black text-center">
                    <strong>Open 7 Days a Week!</strong>
                  </p>
                  <p className="text-black text-center text-sm mt-1">
                    24/7 access available for Premium members
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#FFD400] mx-auto mb-4" />
              <p className="text-xl text-gray-600">Map Location</p>
              <p className="text-gray-500 mt-2">123 Fitness Street, Wellness Plaza, NY 10001</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
