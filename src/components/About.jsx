import about from '../assets/about.png';
import about2 from '../assets/about2.png';

const About = () => {
  return (
    <div id='about' className='mx-4 mb-20'>
      <div className='flex flex-col sm:flex-row lg:flex-row md:flex-row items-center justify-between mb:gap-16 lg:gap-16 gap-8'>
        <img
          src={about}
          alt=''
          className='lg:w-[450px] md:w-[350px] w-[280px]'
        />
        <div>
          <h1 className='md:text-3xl text-2xl font-bold text-blue mb-3'>
            We have been improving our product{' '}
            <span className='text-purple'>for many years.</span>
          </h1>
          <p className='text-grey text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vulputate, ipsum eu aliquam tristique, tortor lorem lobortis magna.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vulputate, ipsum eu aliquam tristique, tortor lorem lobortis magna.
          </p>
          <button className='mt-8 md:mx-0 flex justify-center mx-auto text-white bg-purple rounded py-2 w-[140px] hover:bg-blue transition-all duration-300'>
            Get Started
          </button>
        </div>
      </div>

      <div className='md:mt-20 mt-10 flex flex-col-reverse sm:flex-row lg:flex-row md:flex-row items-center justify-between mb:gap-16 lg:gap-16 gap-8 '>
        <div>
          <h1 className='md:text-3xl text-2xl font-bold text-blue mb-3'>
            We have been improving our product{' '}
            <span className='text-purple'>for many years.</span>
          </h1>
          <p className='text-grey text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vulputate, ipsum eu aliquam tristique, tortor lorem lobortis magna.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vulputate, ipsum eu aliquam tristique, tortor lorem lobortis magna.
          </p>
          <button className='mt-8 md:mx-0 flex justify-center mx-auto text-white bg-purple rounded py-2 w-[140px] hover:bg-blue transition-all duration-300'>
            Get Started
          </button>
        </div>
        <img
          src={about2}
          alt=''
          className='lg:w-[430px] md:w-[330px] w-[250px]'
        />
      </div>
    </div>
  );
};

export default About;
