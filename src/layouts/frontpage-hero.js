import React from 'react'
import HeroImage from '../images/frontpage__hero-illustration'

const FrontpageHero = ( {children} ) => (
    <header className="FrontpageHero">

        <div className="grid">

            { children }
            <div className="illustration">
                <HeroImage />
            </div>
        
        </div>

        <div className="HeaderBackground">
            
            <div className="circles-pattern">
                <div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div>
            </div>
            <div className="circle one"></div>
            <div className="circle two"></div>

        </div>
                
    </header>
)

export default FrontpageHero