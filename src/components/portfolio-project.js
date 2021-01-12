import React from 'react'

const PortfolioProject = ( { date, title, description, image } ) => (
    <article className="PortfolioProject">
        <div className="date">{ date }</div>
        <div className="content">

            <h3 className="title">{ title }</h3>
            <p className="description">{ description }</p>

        </div>
        <div className="image">{ image }</div>
    </article>
)
export default PortfolioProject