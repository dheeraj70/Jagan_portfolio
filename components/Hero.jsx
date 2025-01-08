import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="herol">
            <img className='fhbaby' src="/baby_honyubin.png" alt=" " />
            <div>
              <h1 className='hero_t1'>Hello</h1>
              <h1 className='hero_t1'>I'm <span className='hero_name'>Jagan Mohan</span></h1> 
               <h2 className='hero_t2'>MBBS, MD - Pediatrics, DNB - Neonatology</h2>
                <h2 className="hero_t2">Pediatrician,Neonatologist</h2>
             <h2 className='hero_t3'>`Helping little lives shine!`</h2>
            </div> 
        </div>
        <div className="heror">
             <img className='hero_img' src="/jagan_hero.png" alt="Jagan" />
      
      </div> 
    </div>
  )
}

export default Hero