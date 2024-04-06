import banner from '../assets/banner.png';

const Banner = () => {
  return (
    <div className='flex gap-5 flex-col-reverse md:flex-row justify-between gradientBg rounded-xl lg:rounded-br-[80px] p-8 mx-4 mt-6 items-center'>
      <div className='md:w-3/6 text-white'>
        <h1 className='text-2xl md:text-5xl font-bold mt-4 mb-7'>
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
      </div>
      <div>
        <img
          src={banner}
          alt=''
          className='h-[200px] w-[200px] md:h-[230px] md:w-[230px] md:mr-3 '
        />
      </div>
    </div>
  );
};

export default Banner;
