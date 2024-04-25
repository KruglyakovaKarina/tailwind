import about from '../assets/about.png';
import about2 from '../assets/about2.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div id='about' className='mx-4 mb-20'>
      <div className='flex flex-col sm:flex-row lg:flex-row md:flex-row items-center justify-between mb:gap-16 lg:gap-16 gap-8'>
        <motion.img
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          src={about}
          alt=''
          className='lg:w-[450px] md:w-[350px] w-[280px]'
        />
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
        >
          <h1 className='md:text-3xl text-2xl font-bold text-blue mb-3'>
            {t('aboutTitlePart1')}{' '}
            <span className='text-purple'>{t('aboutTitlePart2')}</span>
          </h1>
          <p className='text-grey text-sm'>{t('aboutText')}</p>
          <button className='mt-8 md:mx-0 flex justify-center mx-auto text-white bg-purple rounded py-2 w-[140px] hover:bg-blue transition-all duration-300'>
            {t('btnGetStarted')}
          </button>
        </motion.div>
      </div>

      <div className='md:mt-20 mt-10 flex flex-col-reverse sm:flex-row lg:flex-row md:flex-row items-center justify-between mb:gap-16 lg:gap-16 gap-8 '>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
        >
          <h1 className='md:text-3xl text-2xl font-bold text-blue mb-3'>
            {t('aboutTitlePart1')}{' '}
            <span className='text-purple'>{t('aboutTitlePart2')}</span>
          </h1>
          <p className='text-grey text-sm'>{t('aboutText')}</p>
          <button className='mt-8 md:mx-0 flex justify-center mx-auto text-white bg-purple rounded py-2 w-[140px] hover:bg-blue transition-all duration-300'>
            {t('btnGetStarted')}
          </button>
        </motion.div>
        <motion.img
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          src={about2}
          alt=''
          className='lg:w-[430px] md:w-[330px] w-[250px]'
        />
      </div>
    </div>
  );
};

export default About;
