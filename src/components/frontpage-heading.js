import React from 'react'

const FrontpageHeadindg = ( { title, subtitle, description } ) => (
    <div className="FrontpageHeading">
        <h2 className="subtitle">{ title }</h2>
        <h3 className="title">{ subtitle }</h3>
        <p className="description">{ description }</p>
    </div>
)
export default FrontpageHeadindg