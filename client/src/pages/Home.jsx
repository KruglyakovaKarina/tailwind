import About from '../components/About';
import Banner from '../components/Banner';
import Discount from '../components/Discount';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-5xl mx-auto'>
        <Banner />
        <Features />
        <About />
        <Pricing />
        <Discount />
      </div>
      <Footer />
    </>
  );
};

export default Home;
