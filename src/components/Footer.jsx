import logo from '../assets/logo.png';
import { AiOutlineFacebook, AiFillTwitterSquare, AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-blue">
            <div className="max-w-5xl mx-auto pb-1">
                <div className="mx-4 border border-transparent border-b-gray-700  text-grey grid grid-cols-10 md:gap-x-20 md:gap-y-10 lg:gap-10 md:px-10 sm:gap-10 lg:px-0 py-10 px-5">
                    <div className='md:col-span-6 lg:col-span-5 sm:col-span-7 col-span-12'>
                        <a
                            href='/'
                            className='text-2xl font-semibold flex items-center text-blue space-x-6 mb-8'
                        >
                            <img src={logo} alt='xyz' className='w-10' />
                            <span className='text-white'>XYZ</span>
                        </a>
                        <p className='mb-8 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            vulputate, ipsum eu aliquam tristique.</p>
                        <div className='flex flex-col sm:flex-row lg:flex-row md:flex-row'>
                            <input type="email" className='  bg-[#9a7af159] md:w-2/3 sm:w-2/3 lg:w-2/3 rounded-lg px-5 py-3 placeholder-gray-500 text-gray-300 outline-none' placeholder='Your email' />
                            <button className='bg-purple text-white font-semibold md:w-1/3 sm:w-1/3 lg:w-1/3 px-auto py-3 rounded-lg ml-0 sm:ml-[-20px]'>Subscribe</button>
                        </div>
                    </div>
                    <div className='md:col-span-4 lg:col-span-1 sm:col-span-3 col-span-12'>
                        <h1 className='footerTitle'>Platform</h1>
                        <ul className='footerUl'>
                            <li>Overview</li>
                            <li>Features</li>
                            <li>About</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className='md:col-span-6 lg:col-span-2 sm:col-span-5 col-span-12'>
                        <h1 className='footerTitle'>Help</h1>
                        <ul className='footerUl'>
                            <li>How does it works?</li>
                            <li>Where to ask question?</li>
                            <li>How to play?</li>
                            <li>What is needed for this?</li>
                        </ul>
                    </div>
                    <div className='md:col-span-4 lg:col-span-2 sm:col-span-5 col-span-12'>
                        <h1 className='footerTitle'>Contacts</h1>
                        <ul className='footerUl'>
                            <li>(012) 1234-567-890</li>
                            <li>123 xyz xyz</li>
                            <li>qwuerybaauyh, shdw - shdsia</li>
                            <li>095467</li>
                        </ul>
                    </div>
                </div>
                <div className='mx-4 my-6 text-grey flex flex-col sm:flex-row lg:flex-row md:flex-row justify-between items-start md:items-center px-5 md:px-10 lg:px-0'>
                    <p>@ XYZ 2023 - 2024. All rights reserved.</p>
                    <div className='text-3xl inline-flex space-x-5 mt-4 md:mt-0 sm:mt-0'>
                        <AiOutlineFacebook />
                        <FaInstagram />
                        <AiFillTwitterSquare />
                        <AiOutlineLinkedin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer