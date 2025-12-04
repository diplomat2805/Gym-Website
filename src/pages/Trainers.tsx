import { motion } from 'motion/react';
import { Award, Target, Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Trainers() {
  const trainers = [
    {
      name: 'Marcus Johnson',
      specialty: 'Strength & Conditioning',
      experience: '10 years',
      certifications: ['NASM-CPT', 'CSCS', 'Nutrition Specialist'],
      bio: 'Former athlete specializing in building strength and muscle. Marcus has helped hundreds transform their bodies.',
      image: 'https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjQ2MDczMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Sarah Williams',
      specialty: 'Weight Loss & Cardio',
      experience: '8 years',
      certifications: ['ACE-CPT', 'TRX Instructor', 'HIIT Specialist'],
      bio: 'Passionate about helping clients achieve sustainable weight loss through cardio and nutrition coaching.',
      image: 'https://images.unsplash.com/photo-1625865020971-581242d0ead6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzcyUyMGNsYXNzfGVufDF8fHx8MTc2NDYzMjM1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'David Chen',
      specialty: 'CrossFit & Functional Training',
      experience: '12 years',
      certifications: ['CrossFit Level 3', 'Olympic Lifting Coach', 'Mobility Specialist'],
      bio: 'CrossFit champion dedicated to pushing limits and achieving peak performance through functional movements.',
      image: 'https://images.unsplash.com/photo-1734188341701-5a0b7575efbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHdvcmtvdXQlMjBpbnRlbnNlfGVufDF8fHx8MTc2NDcwNjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Emily Rodriguez',
      specialty: 'Yoga & Flexibility',
      experience: '9 years',
      certifications: ['RYT-500', 'Meditation Instructor', 'Prenatal Yoga'],
      bio: 'Certified yoga instructor bringing mindfulness and flexibility training to help you find balance.',
      image: 'https://images.unsplash.com/photo-1625865020971-581242d0ead6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzcyUyMGNsYXNzfGVufDF8fHx8MTc2NDYzMjM1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'James Mitchell',
      specialty: 'Sports Performance',
      experience: '11 years',
      certifications: ['ISSA-CPT', 'Speed & Agility Coach', 'Sports Nutrition'],
      bio: 'Works with athletes to enhance performance, speed, and agility for competitive sports.',
      image: 'https://images.unsplash.com/photo-1750698544894-1f012e37e5e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dHxlbnwxfHx8fDE3NjQ2NTQ1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Lisa Thompson',
      specialty: 'Group Fitness & Dance',
      experience: '7 years',
      certifications: ['Zumba Instructor', 'Aerobics Certified', 'Dance Fitness'],
      bio: 'Makes fitness fun with energetic group classes that combine dance and cardio workouts.',
      image: 'https://images.unsplash.com/photo-1758520706103-41d01f815640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjB0cmFpbmluZyUyMHJ1bm5pbmd8ZW58MXx8fHwxNzY0NzA2NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
              Meet Our <span className="text-[#FFD400]">Expert Trainers</span>
            </h1>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified professionals are dedicated to helping you achieve your fitness goals 
              with personalized guidance and motivation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-[#FFD400] transition-all duration-300 group"
              >
                {/* Trainer Image */}
                <div className="relative overflow-hidden h-80">
                  <ImageWithFallback
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Yellow accent line at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFD400]"></div>
                  
                  {/* Social Icons Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#FFD400] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Instagram className="w-5 h-5 text-black" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#FFD400] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Facebook className="w-5 h-5 text-black" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#FFD400] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Twitter className="w-5 h-5 text-black" />
                    </a>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-6">
                  <h3 className="text-2xl text-black mb-1">{trainer.name}</h3>
                  <p className="text-[#FFD400] mb-3">{trainer.specialty}</p>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="w-5 h-5 text-[#FFD400]" />
                    <span className="text-sm text-gray-600">{trainer.experience} Experience</span>
                  </div>

                  <p className="text-gray-700 mb-4">{trainer.bio}</p>

                  {/* Certifications */}
                  <div className="mb-4">
                    <p className="text-sm text-black mb-2">Certifications:</p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="bg-[#F8F8F8] text-black px-3 py-1 rounded-full text-xs"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Trainers */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-black mb-4">
              Why Our <span className="text-[#FFD400]">Trainers Excel</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl text-black mb-3">Certified Experts</h3>
              <p className="text-gray-600">
                All trainers hold nationally recognized certifications and continuously update 
                their knowledge with the latest fitness science.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl text-black mb-3">Personalized Approach</h3>
              <p className="text-gray-600">
                Each trainer creates customized programs tailored to your unique goals, 
                fitness level, and lifestyle requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl text-black mb-3">Passionate Support</h3>
              <p className="text-gray-600">
                Beyond training, our coaches provide motivation, accountability, and ongoing 
                support throughout your fitness journey.
              </p>
            </motion.div>
          </div>
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
              Ready to Work with Our <span className="text-[#FFD400]">Expert Team?</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Book a consultation with one of our trainers and start your transformation today.
            </p>
            <a
              href="/join-now"
              className="bg-[#FFD400] text-black px-8 py-4 rounded-full hover:shadow-xl transition-shadow duration-300 inline-block"
            >
              Schedule Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
