import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import headphone from "../src/assets/hero/headphone.png";
import smartwatch from "../src/assets/hero/watch.png";

const BannerData = {
  discount: '30% OFF',
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  img: headphone, 
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  bgColor: '#f42e37'
};

const BannerData2= {
  discount: '0% OFF',
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  img: smartwatch, 
  title2: "Smart Solo",
  title3: "Winter Sale",
  bgColor: '#2dcc6f'
};


const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>

    </div>
  );
};

export default App;
