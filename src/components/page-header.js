import React from 'react'

const PageHeader = ( { title, subtitle, description } ) => (
    <header className="PageHeader">

        <div className="container">

            <p className="tag">{ subtitle }</p>
            <div className="division"></div>
            <h1 className="title">{ title }</h1>
            <p className="description">{ description }</p>

        </div>
        
        <div className="background">
            <div className="circle"></div>
        </div>

    </header>
)
export default PageHeader