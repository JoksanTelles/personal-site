import React from 'react'
import { Link } from 'gatsby'

const FrontpageHeader = ( { title, subtitle, description, CTAlinkOne, CTAtextOne, CTAlinkTwo, CTAtextTwo } ) => (
    <div className="FrontpageHeader">

        <p className="subtitle">{ subtitle }</p>
        <h1 className="title">{ title }</h1>
        <p className="description">{ description }</p>
        <div className="CTA">
            <button><Link to={ CTAlinkOne}>{ CTAtextOne}</Link></button>
            <button><Link to={ CTAlinkTwo }>{ CTAtextTwo }</Link></button>
        </div>

    </div>
)

export default FrontpageHeader