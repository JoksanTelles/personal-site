import React from 'react'

const FrontpageHero = ( {children} ) => (
    <header className="FrontpageHero">

        <div className="grid Container">

            <div className="margin"></div>
            { children }
            <div className="margin"></div>
        
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