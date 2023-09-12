import HeroImage1 from '/desktop-image-hero-1.jpg'
import HeroImage2 from '/desktop-image-hero-2.jpg'
import HeroImage3 from '/desktop-image-hero-3.jpg'

export function ImageDisplay({activeIndex, handlePrevious, handleNext }){

    return(

        <div className="interactive-slider box">
            
         <div className="img-wrapper">
           <img
          className={activeIndex === 0 ? "active" : "not-active"}
          src={HeroImage1}
          alt="hero-image"
        />
        <img
          className={activeIndex === 1 ? "active" : "not-active"}
          src={HeroImage2}
          alt="hero-image-2"
        />
        <img
          className={activeIndex === 2 ? "active" : "not-active"}
          src={HeroImage3}
          alt="hero-image-3"
        />
         </div>

         <div className="img-slider-btns">
            <button className="slider-btn btn-previous" onClick={handlePrevious}> </button> 
            <button className="slider-btn btn-next" onClick={handleNext}>  </button>
         </div>

        </div>
        
    )

}

export function HeroInfo({title, text}){

    return(
  
    <div className="hero-info text-container">
     <h1>{title}</h1>
     <p>{text}</p>

    <a href="#">SHOP NOW
    <svg className="arrow-icon" width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"></path></svg>
    </a>

    </div>
    );

}