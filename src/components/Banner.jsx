import banner from '../assets/banner.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../motion';

const Banner = () => {
  return (
    <div
      id='overview'
      className='flex gap-5 flex-col-reverse md:flex-row justify-between gradientBg rounded-xl lg:rounded-br-[80px] p-8 mx-4 mt-12 items-center'
    >
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        className='md:w-3/6 text-white'
      >
        <h1 className='text-3xl md:text-5xl sm:text-4xl font-bold mt-4 mb-7'>
          Develop your skills without diligence
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vulputate, ipsum eu aliquam tristique, tortor lorem lobortis magna.
        </p>
        <div className='flex gap-5 mt-7 mb-4 font-medium'>
          <button className='bannerBtn'>Get Started</button>
          <button className='bannerBtn'>Discount</button>
        </div>
      </motion.div>
      <div>
        <motion.img
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          whileInView={'show'}
          src={banner}
          alt=''
          className='h-[200px] w-[200px] md:h-[230px] md:w-[230px] md:mr-3 '
        />
      </div>
    </div>
  );
};

export default Banner;
