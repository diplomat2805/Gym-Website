import { motion } from 'motion/react';
import { Dumbbell, Heart, Zap, Users, Trophy, Target, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Programs() {
  const programs = [
    {
      title: 'Weight Training',
      description: 'Build strength and muscle mass with our comprehensive weight training program. Perfect for beginners and advanced lifters.',
      features: ['Free weights & machines', 'Progressive overload training', 'Form correction', 'Muscle building focus'],
      duration: '60 min',
      level: 'All Levels',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1676109829011-a9f0f3e40f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2NDcwNDg1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Cardio Fitness',
      description: 'High-energy cardio sessions designed to improve endurance, burn calories, and boost cardiovascular health.',
      features: ['HIIT workouts', 'Running & cycling', 'Fat burning focus', 'Heart health improvement'],
      duration: '45 min',
      level: 'All Levels',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1758520706103-41d01f815640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjB0cmFpbmluZyUyMHJ1bm5pbmd8ZW58MXx8fHwxNzY0NzA2NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Yoga Classes',
      description: 'Find balance, flexibility, and inner peace through guided yoga sessions suitable for all experience levels.',
      features: ['Multiple yoga styles', 'Flexibility training', 'Stress reduction', 'Mind-body connection'],
      duration: '60 min',
      level: 'Beginner to Advanced',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1625865020971-581242d0ead6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzcyUyMGNsYXNzfGVufDF8fHx8MTc2NDYzMjM1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'CrossFit Training',
      description: 'Intense functional fitness workouts that combine weightlifting, gymnastics, and cardio for total body conditioning.',
      features: ['Functional movements', 'High intensity', 'Community workouts', 'Competition preparation'],
      duration: '60 min',
      level: 'Intermediate to Advanced',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1734188341701-5a0b7575efbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHdvcmtvdXQlMjBpbnRlbnNlfGVufDF8fHx8MTc2NDcwNjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your specific goals, fitness level, and schedule with certified trainers.',
      features: ['Customized programs', 'Individual attention', 'Goal-specific training', 'Flexible scheduling'],
      duration: '45-60 min',
      level: 'All Levels',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjQ2MDczMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Group Fitness Classes',
      description: 'Energetic group sessions that combine fun, motivation, and effective workouts in a supportive environment.',
      features: ['Diverse class types', 'Motivating instructors', 'Social atmosphere', 'All fitness levels'],
      duration: '45-60 min',
      level: 'All Levels',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1750698544894-1f012e37e5e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dHxlbnwxfHx8fDE3NjQ2NTQ1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

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
              Our <span className="text-[#FFD400]">Programs</span>
            </h1>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect program to match your fitness goals. From strength training to yoga, 
              we offer diverse options for every fitness level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-[#FFD400] transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-14 h-14 bg-[#FFD400] rounded-full flex items-center justify-center">
                    <program.icon className="w-7 h-7 text-black" />
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {program.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl text-black mb-2">{program.title}</h3>
                  <div className="w-12 h-0.5 bg-[#FFD400] mb-4"></div>
                  <p className="text-gray-600 mb-4">{program.description}</p>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Level: <span className="text-black">{program.level}</span></p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-5 h-5 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-black text-xs">✓</span>
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/join-now"
                    className="block bg-[#FFD400] text-black text-center px-6 py-3 rounded-full hover:shadow-lg transition-shadow duration-300"
                  >
                    Enroll Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-black mb-4">
              Weekly <span className="text-[#FFD400]">Schedule</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our classes run throughout the week at various times to fit your schedule.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Calendar className="w-8 h-8 text-[#FFD400]" />
              <h3 className="text-2xl text-black">Sample Class Times</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { time: '6:00 AM - 7:00 AM', class: 'Weight Training', day: 'Mon, Wed, Fri' },
                { time: '7:00 AM - 7:45 AM', class: 'Cardio Fitness', day: 'Tue, Thu, Sat' },
                { time: '9:00 AM - 10:00 AM', class: 'Yoga Classes', day: 'Mon, Wed, Fri' },
                { time: '12:00 PM - 1:00 PM', class: 'CrossFit Training', day: 'Mon - Fri' },
                { time: '5:00 PM - 6:00 PM', class: 'Group Fitness', day: 'Mon - Fri' },
                { time: '6:30 PM - 7:30 PM', class: 'Yoga Classes', day: 'Tue, Thu, Sat' },
              ].map((schedule, index) => (
                <div
                  key={index}
                  className="border-l-4 border-[#FFD400] pl-4 py-2"
                >
                  <p className="text-black mb-1">{schedule.class}</p>
                  <p className="text-sm text-gray-600">{schedule.time}</p>
                  <p className="text-xs text-gray-500 mt-1">{schedule.day}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Want to see the full schedule? Contact us for detailed class timings.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#FFD400] text-black px-8 py-3 rounded-full hover:shadow-lg transition-shadow duration-300"
              >
                Contact Us
              </Link>
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
              Ready to Get <span className="text-[#FFD400]">Started?</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Join our programs today and start your transformation journey with expert guidance.
            </p>
            <Link
              to="/join-now"
              className="bg-[#FFD400] text-black px-8 py-4 rounded-full hover:shadow-xl transition-shadow duration-300 inline-block"
            >
              Join Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
