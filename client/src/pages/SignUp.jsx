import { useNavigate } from 'react-router-dom';
import google from '../assets/google.png';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className='text-lg'>
      <div className='h-lvh flex m-auto justify-center '>
        <div className='flex flex-col justify-center lg:w-1/4'>
          <h1 className='text-4xl font-semibold mb-10 flex justify-center'>
            WELCOME XYZ
          </h1>
          <button className='flex justify-center gap-4 border-gray-300 border-[1px] py-2 rounded-md hover:border-purple'>
            <img src={google} alt='' className='w-6' />
            <span>Continue with google</span>
          </button>

          <p className='text-gray-400 my-5 flex justify-center gap-3'>
            {'------------------'}
            <span>Or</span>
            {'------------------'}
          </p>
          <input
            type='email'
            placeholder='Email'
            className='border-gray-300 border-[1px] py-2 rounded-md mb-4 outline-purple px-4'
          />
          <input
            type='password'
            placeholder='Password'
            className='border-gray-300 border-[1px] py-2 rounded-md mb-6 outline-purple px-4'
          />
          <button className='bg-purple rounded-md w-[100%] py-2 transition-all duration-300 hover:text-white hover:bg-indigo-600'>
            Register
          </button>

          <p className='flex justify-center gap-2 mt-6'>
            Already have an account?
            <button
              onClick={() => {
                navigate('/login');
              }}
              className='text-purple transition-all duration-300 hover:text-indigo-600'
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
