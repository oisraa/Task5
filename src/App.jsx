import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import headerImg from './assets/img/houses.svg';
import HowItWorks from './HowItWorks/HowItWorks'
import GroupIcon from "./assets/img/Group.png"; // Import the image
import handIcon from "./assets/img/hand.png"; // Import the image
import checkIcon from "./assets/img/check.png"; // Import the image
import Background from './Background/Background';
import image from './assets/img/image.png'; // Assuming your image path
// import TrendingCard from './TrendingCards/TrendingCard';
// import Cards from './Cards/Cards';
import pool from './assets/img/R50.png'
import livingroom from './assets/img/R51.png'
import sitingroom from './assets/img/R52.png'
import kitchen from './assets/img/R53.png'
import bedroom from './assets/img/R54.png'
import whiteroom from './assets/img/R55.png'
import TrendingSection from './TrendingCards/TrendingSection';
import iconaddress from './assets/img/location.png';
import RealEstateDeals from './RealEstateDeals/RealEstateDeals';
import Footer from './Footer/Footer';
import logofooter from './assets/img/logo.png'
import faicon from './assets/img/faicon.png'
import linicon from './assets/img/linicon.png'
import twiticon from './assets/img/twiticon.png'
const cardsData = [
  {
    image: pool,
    price: '$300000',
    title: 'Luxury Apartment in California',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    icon: iconaddress,
  },
  {
    image: livingroom,
    price: '$300000',
    title: 'Luxury Apartment in California',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
  },
  {
    image: sitingroom,
    price: '$300000',
    title: 'Luxury Apartment in California',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
  },
  {
    image: kitchen,
    price: '$300000',
    title: 'Luxury Apartment in California',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
  },
  {
    image: bedroom,
    price: '$300000',
    title: 'Luxury Apartment in California',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
  },
  {
    image: whiteroom,
    price: '$300000',
    title: 'Luxury Apartment in California',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
  }
];


const App = () => {
  const stepsData = [
    {
      
      icon: GroupIcon, // Use imported image for Search Apartment
      title : "Search Apartment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: handIcon, // Image path for Select Apartment
      title: "Select Apartment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: checkIcon, // Image path for Confirm Apartment
      title: "Confirm Apartment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];



  return (
   
    <>
    <Navbar btn="Log in"/>
    <HeroSection headerimg={headerImg} />  
    <HowItWorks steps={stepsData} /> 
    <Background 
    imageSrc={image}
      headingText="Find Dream Home"
      paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing eli"/>
      {/* <div className="container mt-5">
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <TrendingCard
              image={card.image}
              price={card.price}
              title={card.title}
              address={card.address}
            />
          </div>
        ))}
      </div>
    </div> */}

<div>
      <TrendingSection
        title="Most Trending"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        cardsData={cardsData}
      />
    </div>
    <RealEstateDeals />
    <Footer logofooter={logofooter} faicon={faicon} twiticon={twiticon} linicon={linicon}/>
         </>
   
  )
}

export default App