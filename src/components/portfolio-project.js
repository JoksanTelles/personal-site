import React from 'react'

const Project = ( { children, linkProject, linkCategory, linkImage, altImage } ) => {
    // Title of the project
    const title = React.Children.map(children, child => child.type.displayName === 'Title' ? child : null);
    // Date of the project
    const date = React.Children.map(children, child => child.type.displayName === 'Date' ? child : null);
    // Category of the project
    const category = React.Children.map(children, child => child.type.displayName === 'Category' ? child : null);
    // Description of the project
    const description = React.Children.map(children, child => child.type.displayName === 'Description' ? child : null);

    return (
        <article className="PortfolioProject">
            <div className="date">
                <div className="divisor"></div>
                <p className="the-date">{ date }</p>
            </div>
            <div className="content">

                <h3 className="title"><a href={ linkProject }>{ title }</a></h3>
                <a className="button" href={ linkCategory }>{ category }</a>
                <p className="description">{ description }</p>

            </div>
            <div className="image"><a href={ linkProject }><img src={ linkImage } alt={ altImage} /></a></div>
        </article>
    )
}
// Card elements - Subcomponents
// https://dev.to/shayanypn/buckle-with-react-sub-component-10ll

// Title of the project
const Title = ({ children }) => children;
Title.displayName = 'Title';
Project.Title = Title;

// Date of the project
const Date = ({ children }) => children;
Date.displayName = 'Date';
Project.Date = Date;

// Category of the project
const Category = ({ children }) => children;
Category.displayName = 'Category';
Project.Category = Category;

// Description of the project
const Description = ({ children }) => children;
Description.displayName = 'Description';
Project.Description = Description;

export default Project