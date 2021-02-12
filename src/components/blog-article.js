import React from 'react'

const Article = ( { children, LinkImage, AltImage, LinkArticle, LinkCategory } ) => {
    // Article name
    const title = React.Children.map(children, child => child.type.displayName === 'Title' ? child : null);
    // Article description
    const description = React.Children.map(children, child => child.type.displayName === 'Description' ? child : null);
    // Category of the article
    const category = React.Children.map(children, child => child.type.displayName === 'Category' ? child : null);
    // Tags of the article
    const tags = React.Children.map(children, child => child.type.displayName === 'Tags' ? child : null);



    return (
        <article className="BlogArticle">
            <a href={ LinkArticle }>
                <img src={ LinkImage } alt={ AltImage } className="image" />
            </a>
            <a href={ LinkCategory }><span className="category">{ category }</span></a>
            <a href={ LinkArticle }><h4 className="title">{ title }</h4></a>
            <p className="description">{ description }</p>
            <div className="tags"></div>
        </article>
    )
}

// Title of the Article
const Title = ({ children }) => children;
Title.displayName = 'Title';
Article.Title = Title;

// Description of the Article
const Description = ({ children }) => children;
Description.displayName = 'Description';
Article.Description = Description;

// Category of the article
const Category = ({ children }) => children;
Category.displayName = 'Category';
Article.Category = Category;

// Tags of the article
const Tags = ({ children }) => children
Tags.displayName = 'Tags';
Article.Tags = Tags;

export default Article