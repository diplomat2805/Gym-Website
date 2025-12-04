import { motion } from 'motion/react';
import { Calculator, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useState } from 'react';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');
  const [advice, setAdvice] = useState('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      // Determine category
      if (bmiValue < 18.5) {
        setCategory('Underweight');
        setAdvice('Consider a strength training program combined with a calorie-rich diet to build muscle mass.');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Normal Weight');
        setAdvice('Great job! Maintain your healthy weight with regular exercise and a balanced diet.');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Overweight');
        setAdvice('Consider our cardio and weight training programs combined with nutritional guidance to reach a healthy weight.');
      } else {
        setCategory('Obese');
        setAdvice('We recommend starting with our personalized training program and nutrition consultation for safe, effective weight loss.');
      }
    }
  };

  const resetCalculator = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setCategory('');
    setAdvice('');
  };

  const getCategoryColor = () => {
    if (category === 'Underweight') return 'text-blue-600';
    if (category === 'Normal Weight') return 'text-green-600';
    if (category === 'Overweight') return 'text-orange-600';
    if (category === 'Obese') return 'text-red-600';
    return 'text-black';
  };

  const getCategoryIcon = () => {
    if (category === 'Underweight') return <TrendingDown className="w-8 h-8" />;
    if (category === 'Normal Weight') return <Minus className="w-8 h-8" />;
    if (category === 'Overweight' || category === 'Obese') return <TrendingUp className="w-8 h-8" />;
    return null;
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
              BMI <span className="text-[#FFD400]">Calculator</span>
            </h1>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your Body Mass Index to understand your current fitness level and get 
              personalized recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Calculator Icon */}
            <div className="w-16 h-16 bg-[#FFD400] rounded-full flex items-center justify-center mx-auto mb-8">
              <Calculator className="w-8 h-8 text-black" />
            </div>

            {/* Form */}
            <form onSubmit={calculateBMI} className="space-y-6">
              {/* Height Input */}
              <div>
                <label htmlFor="height" className="block text-black mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter your height in centimeters"
                  required
                  min="50"
                  max="300"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD400] focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Weight Input */}
              <div>
                <label htmlFor="weight" className="block text-black mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter your weight in kilograms"
                  required
                  min="20"
                  max="500"
                  step="0.1"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFD400] focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#FFD400] text-black px-8 py-3 rounded-full hover:shadow-lg transition-shadow duration-300"
                >
                  Calculate BMI
                </button>
                {bmi !== null && (
                  <button
                    type="button"
                    onClick={resetCalculator}
                    className="px-6 py-3 border-2 border-gray-300 text-black rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    Reset
                  </button>
                )}
              </div>
            </form>

            {/* Results */}
            {bmi !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 pt-8 border-t-2 border-gray-200"
              >
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-2">Your BMI is</p>
                  <p className="text-6xl text-black mb-4">{bmi}</p>
                  <div className={`inline-flex items-center space-x-2 ${getCategoryColor()}`}>
                    {getCategoryIcon()}
                    <span className="text-2xl">{category}</span>
                  </div>
                </div>

                {/* BMI Scale Visual */}
                <div className="mb-6">
                  <div className="h-4 rounded-full overflow-hidden flex">
                    <div className="bg-blue-400 flex-1"></div>
                    <div className="bg-green-400 flex-1"></div>
                    <div className="bg-orange-400 flex-1"></div>
                    <div className="bg-red-400 flex-1"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>&lt;18.5</span>
                    <span>18.5-25</span>
                    <span>25-30</span>
                    <span>&gt;30</span>
                  </div>
                </div>

                {/* Advice Box */}
                <div className="bg-[#F8F8F8] rounded-xl p-6">
                  <h4 className="text-black mb-3">Personalized Advice</h4>
                  <p className="text-gray-700">{advice}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* BMI Info Section */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-black mb-4">
              Understanding <span className="text-[#FFD400]">BMI</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-black mb-2">Underweight</h3>
              <p className="text-3xl text-blue-600 mb-2">&lt;18.5</p>
              <p className="text-sm text-gray-600">May need to gain weight</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 text-center border-2 border-[#FFD400]"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Minus className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-black mb-2">Normal</h3>
              <p className="text-3xl text-green-600 mb-2">18.5-24.9</p>
              <p className="text-sm text-gray-600">Healthy weight range</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-black mb-2">Overweight</h3>
              <p className="text-3xl text-orange-600 mb-2">25-29.9</p>
              <p className="text-sm text-gray-600">Above healthy range</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-black mb-2">Obese</h3>
              <p className="text-3xl text-red-600 mb-2">&gt;30</p>
              <p className="text-sm text-gray-600">Professional help advised</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-xl p-8"
          >
            <h3 className="text-2xl text-black mb-4 text-center">Important Note</h3>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              BMI is a useful screening tool but doesn't directly measure body fat or muscle mass. 
              Athletes and very muscular individuals may have high BMI scores despite having low body fat. 
              For a comprehensive health assessment, consult with our trainers or healthcare professionals.
            </p>
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
              Need Help Reaching Your <span className="text-[#FFD400]">Ideal Weight?</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Our expert trainers can create a personalized plan to help you achieve your fitness goals.
            </p>
            <a
              href="/join-now"
              className="bg-[#FFD400] text-black px-8 py-4 rounded-full hover:shadow-xl transition-shadow duration-300 inline-block"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}