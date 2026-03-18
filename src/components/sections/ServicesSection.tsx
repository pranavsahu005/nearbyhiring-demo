import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, Rocket, Puzzle, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    titleKey: 'services_1',
    description: 'Easy Access to Entry-Level Jobs',
    image: '/assets/img/services/1.png',
    link: '/jobs',
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    titleKey: 'services_2',
    description: 'Upskilling and Training as per Industry Demand',
    image: '/assets/img/services/2.png',
    link: 'https://eduskill.org/our-services/Training-Benefits-EdXplore-EduXcel.php',
    external: true,
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    titleKey: 'services_3',
    description: 'Career Growth Support Even After Getting a Job',
    image: '/assets/img/services/3.png',
    link: 'https://eduskill.org/skill-club/Career-counselling.php',
    external: true,
  },
  {
    icon: <Puzzle className="w-6 h-6 text-white" />,
    titleKey: 'services_4',
    description: 'Data-Driven Notification System – Right Information at the Right Time',
    image: '/assets/img/services/4.png',
    link: 'https://retailcareer.org/index.html',
    external: true,
  },
];

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] relative pb-4">
              {t('services_title') || 'Our Services'}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#004aad] rounded-full" />
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Premium Top Border Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#004aad] to-[#1B5EF7] flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-6 min-h-[56px] flex items-center justify-center">
                {t(service.titleKey)}
              </h3>

              {/* Image Container */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-gray-100 relative">
                <div className="absolute inset-0 bg-[#004aad]/0 group-hover:bg-[#004aad]/5 transition-colors duration-500 z-10" />
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop';
                  }}
                />
              </div>

              {/* Button */}
              <a
                href={service.link}
                target={service.external ? '_blank' : '_self'}
                rel={service.external ? 'noopener noreferrer' : ''}
                className="w-full py-4 px-6 bg-gradient-to-r from-[#004aad] to-[#1B5EF7] hover:from-[#1B5EF7] hover:to-[#004aad] text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 group/btn shadow-md hover:shadow-blue-200 hover:-translate-y-0.5"
              >
                {t('explore_service') || 'Explore Service'}
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
