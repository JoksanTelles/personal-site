import React from 'react'

const FrontpageCard = ( { className, image, imageAlt, title, description } ) => (
    <div className={ className } >

        <div className="Image">
            <img src={ image } alt={ imageAlt } />
        </div>

        <div className="Content">
            <div className="Title">{ title }</div>
            <div className="Description">{ description }</div>
        </div>

    </div>
)
export default FrontpageCard