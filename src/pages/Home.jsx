import About from '../components/About';
import Banner from '../components/Banner';
import Discount from '../components/Discount';
import Features from '../components/Features';
import Pricing from '../components/Pricing';

const Home = () => {
  return (
    <div className='max-w-5xl mx-auto'>
      <Banner />
      <Features />
      <About />
      <Pricing />
      <Discount />
    </div>
  );
};

export default Home;
