import React from "react"
import Link from "gatsby-link"
import Logo from "./icons/logo.js"
import IconBlog from "./icons/iconBlog.js"
import IconAbout from "./icons/iconAbout.js"
import IconPortfolio from "./icons/iconPortfolio.js"
import IconContact from "./icons/iconContact.js"
import BrandBehance from "./icons/brandBehance.js"
import BrandCodepen from "./icons/brandCodepen.js"
import BrandGithub from "./icons/brandGithub.js"
import BrandLinkedin from "./icons/brandLinkedin.js"
import BrandYoutube from "./icons/brandYoutube.js"

const Navbar = () => (
    <header className="navbar">
        <div className="container">
            <div className="left">

                <Link to="/">
                    <Logo />
                </Link>

                <div className="social">

                    <a target="_blank" href="https://www.youtube.com/">
                        <BrandYoutube />
                    </a>

                    <a target="_blank" href="https://www.behance.net/JoksanTelles">
                        <BrandBehance />
                    </a>

                    <a target="_blank" href="https://codepen.io/JoksanTelles/">
                        <BrandCodepen />
                    </a>

                    <a target="_blank" href="https://github.com/JoksanTelles/">
                        <BrandGithub />
                    </a>

                    <a target="_blank" href="https://www.linkedin.com/in/joksantelles/">
                        <BrandLinkedin />
                    </a>

                </div>
                
            </div>
            
            
            <nav>
                <ul>

                    <li><Link to="/blog/">
                        <IconBlog /> Blog
                    </Link></li>

                    <li><Link to="/about/">
                        <IconAbout /> About
                    </Link></li>

                    <li><Link to="/portfolio/">
                        <IconPortfolio /> Portfolio
                    </Link></li>

                    <li><Link to="/contact/">
                        <IconContact /> Contact
                    </Link></li>

                </ul>
            </nav>
        </div>
    </header>
)

export default Navbar;