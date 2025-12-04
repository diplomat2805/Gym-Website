import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Users, Award, Dumbbell, Clock, ArrowRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const [counters, setCounters] = useState({
    members: 0,
    years: 0,
    trainers: 0,
    programs: 0,
  });

  // Animated counters
  useEffect(() => {
    const targets = { members: 5000, years: 15, trainers: 25, programs: 50 };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    const intervals = Object.keys(targets).map((key) => {
      const target = targets[key as keyof typeof targets];
      const step = target / steps;
      let current = 0;

      return setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(intervals[Object.keys(targets).indexOf(key)]);
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, increment);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const programs = [
    {
      title: 'Weight Training',
      description: 'Build strength and muscle with our comprehensive weight training programs.',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1676109829011-a9f0f3e40f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2NDcwNDg1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Cardio Fitness',
      description: 'Boost your endurance and burn calories with high-energy cardio sessions.',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1758520706103-41d01f815640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjB0cmFpbmluZyUyMHJ1bm5pbmd8ZW58MXx8fHwxNzY0NzA2NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Yoga Classes',
      description: 'Find balance and flexibility through mindful yoga practices.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1625865020971-581242d0ead6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzcyUyMGNsYXNzfGVufDF8fHx8MTc2NDYzMjM1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'CrossFit Training',
      description: 'Push your limits with intense functional fitness workouts.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1734188341701-5a0b7575efbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHdvcmtvdXQlMjBpbnRlbnNlfGVufDF8fHx8MTc2NDcwNjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Weight Loss Transformation',
      text: 'Lost 30 pounds in 4 months! The trainers are amazing and the community is so supportive.',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Strength Training',
      text: 'Best gym experience ever. Professional trainers and top-notch equipment.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Yoga Enthusiast',
      text: 'The yoga classes have transformed my flexibility and mental health. Highly recommend!',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#F8F8F8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-black mb-6">
                Transform Your Body.{' '}
                <span className="text-[#FFD400]">Ignite Your Strength.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join the fastest-growing fitness community and train with certified experts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/join-now"
                  className="bg-[#FFD400] text-black px-8 py-4 rounded-full hover:shadow-xl transition-shadow duration-300 inline-flex items-center space-x-2"
                >
                  <span>Join Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/programs"
                  className="bg-white text-black border-2 border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                >
                  View Programs
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1750698544894-1f012e37e5e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dHxlbnwxfHx8fDE3NjQ2NTQ1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fitness workout"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#FFD400] p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#FFD400]" />
                  </div>
                  <div>
                    <p className="text-3xl text-black">{counters.members}+</p>
                    <p className="text-sm text-black">Active Members</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <p className="text-4xl text-black mb-2">{counters.members}+</p>
              <p className="text-gray-600">Members Trained</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <p className="text-4xl text-black mb-2">{counters.years}+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-black" />
              </div>
              <p className="text-4xl text-black mb-2">{counters.trainers}+</p>
              <p className="text-gray-600">Expert Trainers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <p className="text-4xl text-black mb-2">{counters.programs}+</p>
              <p className="text-gray-600">Training Programs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjQ2MDczMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Personal training"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl text-black mb-4">
                Why Choose <span className="text-[#FFD400]">Fit Camp Gym?</span>
              </h2>
              <div className="w-20 h-1 bg-[#FFD400] mb-6"></div>
              <p className="text-gray-600 mb-6">
                At Fit Camp Gym, we believe fitness is more than just working out—it's a lifestyle. 
                With state-of-the-art equipment, expert trainers, and a supportive community, 
                we're here to help you achieve your fitness goals.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Certified and experienced trainers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Premium equipment and facilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Flexible membership plans</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Supportive fitness community</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="bg-[#FFD400] text-black px-8 py-3 rounded-full hover:shadow-lg transition-shadow duration-300 inline-flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-black mb-4">
              Our <span className="text-[#FFD400]">Programs</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from a variety of specialized programs designed to help you reach your fitness goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-[#FFD400] transition-colors duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#FFD400] rounded-full flex items-center justify-center">
                    <program.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-black mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link
                    to="/programs"
                    className="text-black hover:text-[#FFD400] transition-colors duration-300 inline-flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-black mb-4">
              Member <span className="text-[#FFD400]">Success Stories</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results from real people. See what our members have to say about their transformation journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFD400] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FFD400] rounded-full flex items-center justify-center">
                    <span className="text-black">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-black">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-black mb-4">
              Flexible <span className="text-[#FFD400]">Pricing Plans</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose a plan that fits your goals and budget. All plans include access to our premium facilities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-200 rounded-xl p-8"
            >
              <h3 className="text-2xl text-black mb-2">Basic</h3>
              <p className="text-4xl text-black mb-6">
                $29<span className="text-lg text-gray-500">/month</span>
              </p>
              <Link
                to="/pricing"
                className="block bg-black text-white text-center px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 mb-6"
              >
                View Details
              </Link>
            </motion.div>

            {/* Standard Plan - Highlighted */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#FFD400] border-2 border-[#FFD400] rounded-xl p-8 transform scale-105"
            >
              <div className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl text-black mb-2">Standard</h3>
              <p className="text-4xl text-black mb-6">
                $49<span className="text-lg text-gray-700">/month</span>
              </p>
              <Link
                to="/pricing"
                className="block bg-black text-white text-center px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 mb-6"
              >
                View Details
              </Link>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-8"
            >
              <h3 className="text-2xl text-black mb-2">Premium</h3>
              <p className="text-4xl text-black mb-6">
                $79<span className="text-lg text-gray-500">/month</span>
              </p>
              <Link
                to="/pricing"
                className="block bg-black text-white text-center px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 mb-6"
              >
                View Details
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Ready to Start Your <span className="text-[#FFD400]">Transformation?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of members who have already transformed their lives at Fit Camp Gym.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/join-now"
                className="bg-[#FFD400] text-black px-8 py-4 rounded-full hover:shadow-xl transition-shadow duration-300 inline-flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-black px-8 py-4 rounded-full hover:shadow-xl transition-shadow duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
