import React, {useState} from 'react'
import { SliderData } from './SliderData'
import "./Imageslider.css"

const ImageSlider = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length;

const nextSlide = ()=>{
    setCurrent(current === length-1 ? 0: current+1);
};

const prevSlide=()=>{
    setCurrent(current===0? length-1 : current -1);
};

if(!Array.isArray(slides)|| slides.length<= 0){
    return null
}


  return (
    <div id='newdiv'>
    <div id='slider'>
    
      {SliderData.map((slide, index) =>{
        return(
            <>
            <div id='container'>
                
                <div id='link' className={index === current? 'slide active': 'slide' } key={index}>
                {index === current && (<a href={slide.link} target="_blank">
                    <div id='image' className={index === current? 'slide active': 'slide' } key={index}>
                    {index === current && (<img className='rounded-xl p-2 border-white mt-10 border-2 h-[50vh]' src={slide.image} />)}</div>
                    </a>)}</div>            
                <div id='title2' className={index === current? 'slide active': 'slide' } key={index}>
                {index === current && (<p className='title'>{slide.title}</p>)}</div>
                <div>
            <button id='prev' onClick={prevSlide}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left text-2xl" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg></button>
            <button id='next' onClick={nextSlide}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right text-lg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg></button>
            </div>
            </div>
            </>
            )})}
    </div>
    </div>
  )
}

export default ImageSlider
