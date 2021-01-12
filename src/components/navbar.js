import React from "react"
import Link from "gatsby-link"
import Logo from "./icons/logo.js"
import IconBlog from "./icons/iconBlog.js"
import IconAbout from "./icons/iconAbout.js"
import IconPortfolio from "./icons/iconPortfolio.js"
import IconContact from "./icons/iconContact.js"
import BrandGithub from "./icons/brandGithub.js"
import BrandLinkedin from "./icons/brandLinkedin.js"

const Navbar = () => (
    <header className="Navbar">
        <div className="container">

            <Link to="/" className="Logo">
                <Logo />
            </Link>

            <SocialMedia>

                <SocialIcon
                    link="https://github.com/JoksanTelles/"
                    icon={ <BrandGithub /> } />
                <SocialIcon
                    link="https://www.linkedin.com/in/joksantelles/"
                    icon={ <BrandLinkedin /> } />

            </SocialMedia>
            
            <NavLinks>

                <NavItem
                    link="/blog/"
                    linkText="Blog"
                    icon={ <IconBlog/> } />

                <NavItem
                    link="/about/"
                    linkText="About"
                    icon={ <IconAbout/> } />

                <NavItem
                    link="/portfolio/"
                    linkText="Portfolio"
                    icon={ <IconPortfolio/> } />

                <NavItem
                    link="/contact/"
                    linkText="Contact"
                    icon={ <IconContact/> } />

            </NavLinks>
            
        </div>
        
    </header>
)


// Navigation links - Block
function NavLinks({ children }) {
    return (
        <nav className="NavLinks">{children}</nav>
    )
}

// Navigation links - Items
function NavItem( { link, linkText, icon }) {
    return (

            <Link to={ link } className="btn-soft">

                { icon }{ linkText }

            </Link>
    )
}

// Social Icons - Block
function SocialMedia( props ) {
    return (
        <div className="Social">{ props.children }</div>
    )
}

// Social Icons - Element
function SocialIcon({ link, icon }) {
    return (
        <a href={ link } target="_blank" rel="noreferrer">
            { icon }
        </a>
    )
}


export default Navbar;