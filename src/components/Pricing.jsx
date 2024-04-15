import { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: 'Start',
      description: 'Donec vulputate, consectetur ipsum eu, consectetur adipiscing elit.',
      monthlyPrice: 5,
      yearlyPrice: 50,
      videos: true,
      homework: true,
      addTask: false,
      conferences: false,
      advice: false
    },
    {
      name: 'Advance',
      description: 'Donec vulputate, consectetur ipsum eu, consectetur adipiscing elit.',
      monthlyPrice: 9,
      yearlyPrice: 85,
      videos: true,
      homework: true,
      addTask: true,
      conferences: true,
      advice: false
    },
    {
      name: 'Premium',
      description: 'Donec vulputate, consectetur ipsum eu, consectetur adipiscing elit.',
      monthlyPrice: 10,
      yearlyPrice: 100,
      videos: true,
      homework: true,
      addTask: true,
      conferences: true,
      advice: true
    },
  ];

  return (
    <div className='mx-4 mb-20'>
      <div className='text-center'>
        <h1 className='text-blue md:text-4xl text-2xl font-bold '>
          Here are all our plans
        </h1>
        <p className='text-grey text-sm md:w-1/3 mx-auto mt-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vulputate, ipsum eu.
        </p>
        <div className='mt-10'>
          <label htmlFor='toggle' className='inline-flex items-center cursor-pointer'>
            <span className='text-blue font-bold md:text-2xl text-xl'>Monthly</span>
            <div className={`${isYearly ? 'bg-purple' : 'bg-gray-200'} h-6 w-12 rounded-full md:mx-12 mx-6 flex items-center transition-all duration-300`}>
              <div className={`${isYearly ? 'bg-gray-200 ml-6' : 'bg-gray-400'} h-5 w-5 rounded-full m-1`}></div>
            </div>
            <span className='text-blue font-bold md:text-2xl text-xl'>Yearly</span>
            <input type="checkbox" className='hidden' id='toggle' checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
          </label>
        </div>
      </div>
      <div className='mt-10 md:gap-10 gap-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {packages.map((pkg, index) =>
          <div key={index} className='shadow-3xl rounded-2xl p-8 text-center'>
            <h1 className='text-blue text-2xl font-bold '>{pkg.name}</h1>
            <p className='text-grey text-xs mx-auto mt-2'>{pkg.description}</p>
            <div className='mt-8 inline-flex items-end '>
              <h1 className='text-purple md:text-4xl text-4xl font-bold '>{isYearly ? pkg.yearlyPrice : pkg.monthlyPrice}$</h1>
              <p className=' text-sm'>{isYearly ? '/year' : '/month'}</p>
            </div>
            <div className='mt-8 text-left'>
              <ul className='flex flex-col gap-4'>
                <li className='benefitsLi'>
                  <div className={`${pkg.videos ? 'bg-green-400' : 'bg-red-400'} w-4 h-4 rounded-full`}></div>
                  <p className='benefitsText'>Videos of Lessons</p></li>
                <li className='benefitsLi'>
                  <div className={`${pkg.homework ? 'bg-green-400' : 'bg-red-400'} w-4 h-4 rounded-full`}></div>
                  <p className='benefitsText'>Homework check</p></li>
                <li className='benefitsLi'>
                  <div className={`${pkg.addTask ? 'bg-green-400' : 'bg-red-400'} w-4 h-4 rounded-full`}></div>
                  <p className='benefitsText'>Additional practical task</p></li>
                <li className='benefitsLi'>
                  <div className={`${pkg.conferences ? 'bg-green-400' : 'bg-red-400'} w-4 h-4 rounded-full`}></div>
                  <p className='benefitsText'>Monthly conferences</p></li>
                <li className='benefitsLi'>
                  <div className={`${pkg.advice ? 'bg-green-400' : 'bg-red-400'} w-4 h-4 rounded-full`}></div>
                  <p className='benefitsText'>Personal advice from teachers</p></li>
              </ul>
            </div>
            <button className='mt-8 md:mx-0  text-purple border-purple border-[1px] hover:text-white bg-white rounded py-2 w-[140px] hover:bg-purple transition-all duration-300'>Get Started</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;
