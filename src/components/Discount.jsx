import discount from '../assets/discount.png'

const Discount = () => {
    return (
        <div className='flex gap-5 flex-col-reverse md:flex-row justify-between gradientBg rounded-xl lg:rounded-br-[80px] p-8 mx-4 my-12 items-center'>
            <div className='md:w-2/3 text-white'>
                <h1 className='text-3xl md:text-4xl  font-bold mt-4 mb-7'>
                    Each student can share their discount code for friends
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vulputate, ipsum eu aliquam tristique, tortor lorem lobortis magna.
                </p>
                <div className='flex gap-5 mt-7 mb-4 font-medium'>
                    <button className='bannerBtn'>I have a code</button>
                </div>
            </div>
            <div>
                <img
                    src={discount}
                    alt=''
                    className='h-[200px] w-[200px] md:h-[230px] md:w-[230px] md:mr-3 '
                />
            </div>
        </div>
    )
}

export default Discount