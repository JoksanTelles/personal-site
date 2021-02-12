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
    // Date of the article
    const date = React.Children.map(children, child => child.type.displayName === 'Date' ? child : null);



    return (
        <article className="BlogArticle">
            <a href={ LinkArticle }>
                <img src={ LinkImage } alt={ AltImage } className="image" />
            </a>

            <div className="category-date">
                <span className="date">
                    <IconDate />
                    <span className="text">{ date }</span>
                    </span>
                <span className="category">
                    <IconCategory />
                    <a href={ LinkCategory } className="text">{ category }</a>
                </span>
            </div>
            
            <a href={ LinkArticle }><h4 className="title">{ title }</h4></a>
            <p className="description">{ description }</p>
            <div className="tags">{ tags }</div>
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
const Tags = ({ children }) => children;
Tags.displayName = 'Tags';
Article.Tags = Tags;

// Date of the article
const Date = ({ children }) => children;
Date.displayName = 'Date';
Article.Date = Date;


function IconDate() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z" fill="#CCCCCC"/>
        </svg>
    )
}

function IconCategory() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6Z" fill="#C4C4C4"/>
        <path d="M8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12Z" fill="#C4C4C4"/>
        <path d="M6 20C6.53043 20 7.03914 19.7893 7.41421 19.4142C7.78929 19.0391 8 18.5304 8 18C8 17.4696 7.78929 16.9609 7.41421 16.5858C7.03914 16.2107 6.53043 16 6 16C5.46957 16 4.96086 16.2107 4.58579 16.5858C4.21071 16.9609 4 17.4696 4 18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z" fill="#C4C4C4"/>
        <path d="M14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8C11.4696 8 10.9609 7.78929 10.5858 7.41421C10.2107 7.03914 10 6.53043 10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6Z" fill="#C4C4C4"/>
        <path d="M12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z" fill="#C4C4C4"/>
        <path d="M14 18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20C11.4696 20 10.9609 19.7893 10.5858 19.4142C10.2107 19.0391 10 18.5304 10 18C10 17.4696 10.2107 16.9609 10.5858 16.5858C10.9609 16.2107 11.4696 16 12 16C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18Z" fill="#C4C4C4"/>
        <path d="M18 8C18.5304 8 19.0391 7.78929 19.4142 7.41421C19.7893 7.03914 20 6.53043 20 6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4C17.4696 4 16.9609 4.21071 16.5858 4.58579C16.2107 4.96086 16 5.46957 16 6C16 6.53043 16.2107 7.03914 16.5858 7.41421C16.9609 7.78929 17.4696 8 18 8Z" fill="#C4C4C4"/>
        <path d="M20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14C17.4696 14 16.9609 13.7893 16.5858 13.4142C16.2107 13.0391 16 12.5304 16 12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10C18.5304 10 19.0391 10.2107 19.4142 10.5858C19.7893 10.9609 20 11.4696 20 12Z" fill="#C4C4C4"/>
        <path d="M18 20C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18C20 17.4696 19.7893 16.9609 19.4142 16.5858C19.0391 16.2107 18.5304 16 18 16C17.4696 16 16.9609 16.2107 16.5858 16.5858C16.2107 16.9609 16 17.4696 16 18C16 18.5304 16.2107 19.0391 16.5858 19.4142C16.9609 19.7893 17.4696 20 18 20Z" fill="#C4C4C4"/>
        </svg>
    )
}

export default Article