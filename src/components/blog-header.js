import React from 'react'

const BlogHeader = ( { title, category, description, image, altImage, author, date } ) => (
    <header className="BlogHeader">

        <div className="container">

            <div className="data">
                <span className="category">{ category }</span>
                <span className="date"> | {date}</span>
            </div>
            <div className="division"></div>
            <h1 className="title">{ title }</h1>
            <p className="description">{ description }</p>
            <img src={ image } alt={ altImage } className="cover" />

        </div>
        
        <div className="background">
            <div className="circle"></div>
        </div>

    </header>
)
export default BlogHeader