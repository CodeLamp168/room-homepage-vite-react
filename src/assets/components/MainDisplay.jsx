import React, { useState, useRef, useCallback, useEffect } from "react";
import AboutImageDark from '/image-about-dark.jpg'
import AboutImageLight from '/image-about-light.jpg'

import { HeroInfo } from "./HeroSectionComponents";
import { ImageDisplay } from "./HeroSectionComponents";


function Hero(){
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);
    const info = [{
        id: 0,

        title: 'Discover innovative ways to decorate',

        text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
      }, {
        id: 1,

        title: 'We are available all across the globe',

        text: ' With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate to contact us today.'
      }, {
        id: 2,

        title: ' Manufactured with the best materials',

        text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
      }];


  

      useEffect(() => {
        intervalRef.current = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 8000);
      
        return () => clearInterval(intervalRef.current);
      }, [activeIndex]);
      
      const resetInterval = useCallback(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 8000);
      }, []);
      
      const handlePrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
        resetInterval();
      };
      
      const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
        resetInterval();
      };

      
      const activeInfo = info[activeIndex];
    
      return (
        <div className="hero-section">
          <ImageDisplay 
           activeIndex={activeIndex}
           handlePrevious={handlePrevious}
           handleNext={handleNext} />
          <HeroInfo title={activeInfo.title} text={activeInfo.text} />
        </div>
      );
 }

function About(){

    return(
        <div className="about-section">
            <img className="about-img box" src={AboutImageDark} alt="implement-soon-2" />
            <div className="about-info text-container">
                <h1>About our furniture</h1>
                <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <img className="about-img box" src={AboutImageLight} alt="implement-soon-2" />
        </div>
    )
}

export default function MainDisplay() {

return (

    <main className="main">
        <Hero />
        <About />
    </main>
  ) 
}