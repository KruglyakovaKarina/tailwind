import feature from '../assets/feature.png';

const Features = () => {
  return (
    <div className='mx-4 md:my-20 sm:my-12 my-12 flex flex-col lg:flex-row justify-between items-start gap-10'>
      <div className='lg:w-1/4'>
        <h1 className='md:text-3xl text-2xl font-bold text-blue mb-3'>
          Why we are better than others
        </h1>
        <p className='text-grey text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vulputate, ipsum eu aliquam tristique, tortor lorem lobortis magna.
        </p>
      </div>
      <div className='w-full lg:w-3/4'>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 sm:gap-8 gap-6'>
          <div className='feature'>
            <img src={feature} alt='' className='w-[140px]' />
            <p className='featureP'>Conventient study schedule</p>
          </div>
          <div className='feature md:mt-16'>
            <img src={feature} alt='' className='w-[140px]' />
            <p className='featureP'>Conventient study schedule</p>
          </div>
          <div className='feature'>
            <img src={feature} alt='' className='w-[140px]' />
            <p className='featureP'>Conventient study schedule</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
