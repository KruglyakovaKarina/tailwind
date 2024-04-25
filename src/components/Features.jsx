import feature from '../assets/feature.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../motion';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  return (
    <div
      id='feature'
      className='mx-4 md:my-20 sm:my-12 my-12 flex flex-col lg:flex-row justify-between items-start gap-10'
    >
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView={'show'}
        className='lg:w-1/4'
      >
        <h1 className='md:text-3xl text-2xl font-bold text-blue mb-3'>
          {t('featuresTitle')}
        </h1>
        <p className='text-grey text-sm'>{t('bannerText')}</p>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        className='w-full lg:w-3/4'
      >
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 sm:gap-8 gap-6'>
          <div className='feature'>
            <img src={feature} alt='' className='w-[140px]' />
            <p className='featureP'>{t('featureText')}</p>
          </div>
          <div className='feature md:mt-16'>
            <img src={feature} alt='' className='w-[140px]' />
            <p className='featureP'>{t('featureText')}</p>
          </div>
          <div className='feature'>
            <img src={feature} alt='' className='w-[140px]' />
            <p className='featureP'>{t('featureText')}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
