import React from 'react'

const PortfolioProject = ( { date, link, title, linkCategory, category, description, image, imageAlt } ) => (
    <article className="PortfolioProject">
        <div className="date">
            <div className="divisor"></div>
            <p className="the-date">{ date }</p>
        </div>
        <div className="content">

            <h3 className="title"><a href={ link }>{ title }</a></h3>
            <a className="button" href={ linkCategory }>{ category }</a>
            <p className="description">{ description }</p>

        </div>
        <div className="image"><img src={ image } alt={ imageAlt} /></div>
    </article>
)
export default PortfolioProject