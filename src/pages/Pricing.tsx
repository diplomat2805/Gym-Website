import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 29,
      period: 'month',
      description: 'Perfect for getting started with your fitness journey',
      features: [
        'Access to gym equipment',
        'Locker room facilities',
        'Free fitness assessment',
        '1 group class per week',
        'Mobile app access',
      ],
      notIncluded: [
        'Personal training sessions',
        'Nutrition consultation',
        'Guest passes',
        'Priority booking',
      ],
      highlight: false,
    },
    {
      name: 'Standard',
      price: 49,
      period: 'month',
      description: 'Most popular plan for dedicated fitness enthusiasts',
      features: [
        'Unlimited gym access',
        'All group fitness classes',
        'Free fitness assessment',
        'Locker room with amenities',
        'Mobile app with workout tracking',
        '2 guest passes per month',
        '10% discount on merchandise',
        '1 personal training session/month',
      ],
      notIncluded: [
        'Unlimited personal training',
        'Nutrition meal plans',
      ],
      highlight: true,
      badge: 'Most Popular',
    },
    {
      name: 'Premium',
      price: 79,
      period: 'month',
      description: 'Complete fitness solution with premium benefits',
      features: [
        'Unlimited 24/7 gym access',
        'All group fitness classes',
        'Unlimited towel service',
        'Priority class booking',
        'Private locker',
        '4 personal training sessions/month',
        'Monthly nutrition consultation',
        'Body composition analysis',
        'Unlimited guest passes',
        '20% discount on merchandise',
        'Access to exclusive workshops',
        'Free gym merchandise',
      ],
      notIncluded: [],
      highlight: false,
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
              Flexible <span className="text-[#FFD400]">Pricing Plans</span>
            </h1>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the membership plan that best fits your fitness goals and lifestyle. 
              No hidden fees, cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-xl overflow-hidden ${
                  plan.highlight
                    ? 'bg-[#FFD400] border-4 border-[#FFD400] transform md:scale-105 shadow-2xl'
                    : 'bg-white border-2 border-gray-200 shadow-lg'
                }`}
              >
                {/* Badge for highlighted plan */}
                {plan.badge && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-black text-white px-4 py-2 text-sm flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-[#FFD400]" />
                      <span>{plan.badge}</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Name */}
                  <h3 className={`text-3xl mb-2 ${plan.highlight ? 'text-black' : 'text-black'}`}>
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span className={`text-5xl ${plan.highlight ? 'text-black' : 'text-black'}`}>
                      ${plan.price}
                    </span>
                    <span className={`text-xl ${plan.highlight ? 'text-gray-700' : 'text-gray-500'}`}>
                      /{plan.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`mb-6 ${plan.highlight ? 'text-gray-700' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  <Link
                    to="/join-now"
                    className={`block text-center px-6 py-3 rounded-full mb-8 transition-all duration-300 ${
                      plan.highlight
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-[#FFD400] text-black hover:shadow-lg'
                    }`}
                  >
                    Get Started
                  </Link>

                  {/* Features List */}
                  <div className="space-y-4">
                    <p className={`text-sm uppercase tracking-wide mb-3 ${plan.highlight ? 'text-black' : 'text-black'}`}>
                      What's Included:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.highlight ? 'bg-black' : 'bg-[#FFD400]'
                        }`}>
                          <Check className={`w-3 h-3 ${plan.highlight ? 'text-[#FFD400]' : 'text-black'}`} />
                        </div>
                        <span className={`${plan.highlight ? 'text-black' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}

                    {/* Not Included (for non-premium plans) */}
                    {plan.notIncluded.length > 0 && (
                      <>
                        <p className={`text-sm uppercase tracking-wide mt-6 mb-3 ${plan.highlight ? 'text-gray-700' : 'text-gray-500'}`}>
                          Not Included:
                        </p>
                        {plan.notIncluded.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3 opacity-60">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border-2 border-gray-400">
                              <span className="text-gray-400 text-xs">✕</span>
                            </div>
                            <span className={`${plan.highlight ? 'text-gray-700' : 'text-gray-500'}`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-black mb-4">
              Membership <span className="text-[#FFD400]">Benefits</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-black mb-1">No Commitment</h4>
                  <p className="text-sm text-gray-600">Cancel anytime with no long-term contracts</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-black mb-1">Flexible Payments</h4>
                  <p className="text-sm text-gray-600">Monthly, quarterly, or annual payment options</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-black mb-1">Freeze Option</h4>
                  <p className="text-sm text-gray-600">Freeze your membership for up to 3 months</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-black mb-1">Easy Upgrades</h4>
                  <p className="text-sm text-gray-600">Switch plans anytime to match your needs</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-black mb-1">Money-Back Guarantee</h4>
                  <p className="text-sm text-gray-600">30-day satisfaction guarantee on all plans</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#FFD400] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-black mb-1">Special Discounts</h4>
                  <p className="text-sm text-gray-600">Student, senior, and corporate discounts available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-black mb-4">
              Frequently Asked <span className="text-[#FFD400]">Questions</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Can I switch plans later?',
                answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
              },
              {
                question: 'Are there any joining fees?',
                answer: 'No joining fees or hidden charges. You only pay the monthly membership fee.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, debit cards, and direct bank transfers.',
              },
              {
                question: 'Can I freeze my membership?',
                answer: 'Yes, you can freeze your membership for up to 3 months per year for a small administrative fee.',
              },
              {
                question: 'Do you offer corporate memberships?',
                answer: 'Yes! We offer special corporate packages for companies. Contact us for details.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#F8F8F8] rounded-xl p-6"
              >
                <h4 className="text-black mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
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
              Ready to <span className="text-[#FFD400]">Get Started?</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Choose your plan and start your fitness journey today. First week is on us!
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
