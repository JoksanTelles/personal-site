import React from "react"
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import PageHeader from '../../components/page-header'
import Helmet from 'react-helmet'
import Article from "../../components/blog-article"

const Blog = () => (
    <>
        <Helmet
            htmlAttributes={{
                lang: 'es-MX',
            }}
            title='Blog | Joksan Télles'
            meta={[
                { name: 'description', content: 'En este espacio me encontrarás compartiendo contenido de valor ya sea de diseño, desarrollo o incluso temas off-topic.' },
                { name: 'keywords', content: 'diseño, desarrollo, blog, ui/ux' },
                { name: 'robots', content: 'index,follow' },
            ]}
        />

        <Navbar/>
        <PageHeader
            title="Compartiendo cositas :)"
            subtitle="Blog"
            description="En este espacio me encontrarás compartiendo contenido de valor ya sea de diseño, desarrollo o incluso temas off-topic." />

        <BlogArticles>
            <Article LinkArticle="https://joksantelles.com" LinkCategory="https://joksantelles.com/" LinkImage="https://miro.medium.com/max/1600/1*2X22CjejXcLSWPeMpZIa0Q.jpeg">
                <Article.Title>This is the title</Article.Title>
                <Article.Category>Branding</Article.Category><Article.Date>December 15, 2020</Article.Date>
                <Article.Description>This is suppouse that is the long description that i've build to this example of component</Article.Description>
                <Article.Tags>
                    <Tag link="https://joksantelles.com/" text="Social Media" />
                    <Tag link="https://joksantelles.com/" text="Design" />
                    <Tag link="https://joksantelles.com/" text="Branding" />
                </Article.Tags>
            </Article>
            
            <Article LinkArticle="https://joksantelles.com" LinkCategory="https://joksantelles.com/" LinkImage="https://miro.medium.com/max/1600/1*2X22CjejXcLSWPeMpZIa0Q.jpeg">
                <Article.Title>This is the title</Article.Title>
                <Article.Category>Branding</Article.Category><Article.Date>December 15, 2020</Article.Date>
                <Article.Description>This is suppouse that is the long description that i've build to this example of component</Article.Description>
                <Article.Tags>
                    <Tag link="https://joksantelles.com/" text="Social Media" />
                    <Tag link="https://joksantelles.com/" text="Design" />
                    <Tag link="https://joksantelles.com/" text="Branding" />
                </Article.Tags>
            </Article>
            
            <Article LinkArticle="https://joksantelles.com" LinkCategory="https://joksantelles.com/" LinkImage="https://miro.medium.com/max/1600/1*2X22CjejXcLSWPeMpZIa0Q.jpeg">
                <Article.Title>This is the title</Article.Title>
                <Article.Category>Branding</Article.Category><Article.Date>December 15, 2020</Article.Date>
                <Article.Description>This is suppouse that is the long description that i've build to this example of component</Article.Description>
                <Article.Tags>
                    <Tag link="https://joksantelles.com/" text="Social Media" />
                    <Tag link="https://joksantelles.com/" text="Design" />
                    <Tag link="https://joksantelles.com/" text="Branding" />
                </Article.Tags>
            </Article>
            
            <Article LinkArticle="https://joksantelles.com" LinkCategory="https://joksantelles.com/" LinkImage="https://miro.medium.com/max/1600/1*2X22CjejXcLSWPeMpZIa0Q.jpeg">
                <Article.Title>This is the title</Article.Title>
                <Article.Category>Branding</Article.Category><Article.Date>December 15, 2020</Article.Date>
                <Article.Description>This is suppouse that is the long description that i've build to this example of component</Article.Description>
                <Article.Tags>
                    <Tag link="https://joksantelles.com/" text="Social Media" />
                    <Tag link="https://joksantelles.com/" text="Design" />
                    <Tag link="https://joksantelles.com/" text="Branding" />
                </Article.Tags>
            </Article>
            
            <Article LinkArticle="https://joksantelles.com" LinkCategory="https://joksantelles.com/" LinkImage="https://miro.medium.com/max/1600/1*2X22CjejXcLSWPeMpZIa0Q.jpeg">
                <Article.Title>This is the title</Article.Title>
                <Article.Category>Branding</Article.Category><Article.Date>December 15, 2020</Article.Date>
                <Article.Description>This is suppouse that is the long description that i've build to this example of component</Article.Description>
                <Article.Tags>
                    <Tag link="https://joksantelles.com/" text="Social Media" />
                    <Tag link="https://joksantelles.com/" text="Design" />
                    <Tag link="https://joksantelles.com/" text="Branding" />
                </Article.Tags>
            </Article>
            
            <Article LinkArticle="https://joksantelles.com" LinkCategory="https://joksantelles.com/" LinkImage="https://miro.medium.com/max/1600/1*2X22CjejXcLSWPeMpZIa0Q.jpeg">
                <Article.Title>This is the title</Article.Title>
                <Article.Category>Branding</Article.Category><Article.Date>December 15, 2020</Article.Date>
                <Article.Description>This is suppouse that is the long description that i've build to this example of component</Article.Description>
                <Article.Tags>
                    <Tag link="https://joksantelles.com/" text="Social Media" />
                    <Tag link="https://joksantelles.com/" text="Design" />
                    <Tag link="https://joksantelles.com/" text="Branding" />
                </Article.Tags>
            </Article>
            
            <Article LinkArticle="https://joksantelles.com" LinkCategory="https://joksantelles.com/" LinkImage="https://miro.medium.com/max/1600/1*2X22CjejXcLSWPeMpZIa0Q.jpeg">
                <Article.Title>This is the title</Article.Title>
                <Article.Category>Branding</Article.Category><Article.Date>December 15, 2020</Article.Date>
                <Article.Description>This is suppouse that is the long description that i've build to this example of component</Article.Description>
                <Article.Tags>
                    <Tag link="https://joksantelles.com/" text="Social Media" />
                    <Tag link="https://joksantelles.com/" text="Design" />
                    <Tag link="https://joksantelles.com/" text="Branding" />
                </Article.Tags>
            </Article>
            
            <Article LinkArticle="https://joksantelles.com" LinkCategory="https://joksantelles.com/" LinkImage="https://miro.medium.com/max/1600/1*2X22CjejXcLSWPeMpZIa0Q.jpeg">
                <Article.Title>This is the title</Article.Title>
                <Article.Category>Branding</Article.Category><Article.Date>December 15, 2020</Article.Date>
                <Article.Description>This is suppouse that is the long description that i've build to this example of component</Article.Description>
                <Article.Tags>
                    <Tag link="https://joksantelles.com/" text="Social Media" />
                    <Tag link="https://joksantelles.com/" text="Design" />
                    <Tag link="https://joksantelles.com/" text="Branding" />
                </Article.Tags>
            </Article>
            
            <Article LinkArticle="https://joksantelles.com" LinkCategory="https://joksantelles.com/" LinkImage="https://miro.medium.com/max/1600/1*2X22CjejXcLSWPeMpZIa0Q.jpeg">
                <Article.Title>This is the title</Article.Title>
                <Article.Category>Branding</Article.Category><Article.Date>December 15, 2020</Article.Date>
                <Article.Description>This is suppouse that is the long description that i've build to this example of component</Article.Description>
                <Article.Tags>
                    <Tag link="https://joksantelles.com/" text="Social Media" />
                    <Tag link="https://joksantelles.com/" text="Design" />
                    <Tag link="https://joksantelles.com/" text="Branding" />
                </Article.Tags>
            </Article>
            
            <Article LinkArticle="https://joksantelles.com" LinkCategory="https://joksantelles.com/" LinkImage="https://miro.medium.com/max/1600/1*2X22CjejXcLSWPeMpZIa0Q.jpeg">
                <Article.Title>This is the title</Article.Title>
                <Article.Category>Branding</Article.Category><Article.Date>December 15, 2020</Article.Date>
                <Article.Description>This is suppouse that is the long description that i've build to this example of component</Article.Description>
                <Article.Tags>
                    <Tag link="https://joksantelles.com/" text="Social Media" />
                    <Tag link="https://joksantelles.com/" text="Design" />
                    <Tag link="https://joksantelles.com/" text="Branding" />
                </Article.Tags>
            </Article>
            
            <Article LinkArticle="https://joksantelles.com" LinkCategory="https://joksantelles.com/" LinkImage="https://miro.medium.com/max/1600/1*2X22CjejXcLSWPeMpZIa0Q.jpeg">
                <Article.Title>This is the title</Article.Title>
                <Article.Category>Branding</Article.Category><Article.Date>December 15, 2020</Article.Date>
                <Article.Description>This is suppouse that is the long description that i've build to this example of component</Article.Description>
                <Article.Tags>
                    <Tag link="https://joksantelles.com/" text="Social Media" />
                    <Tag link="https://joksantelles.com/" text="Design" />
                    <Tag link="https://joksantelles.com/" text="Branding" />
                </Article.Tags>
            </Article>
            
            <Article LinkArticle="https://joksantelles.com" LinkCategory="https://joksantelles.com/" LinkImage="https://miro.medium.com/max/1600/1*2X22CjejXcLSWPeMpZIa0Q.jpeg">
                <Article.Title>This is the title</Article.Title>
                <Article.Category>Branding</Article.Category><Article.Date>December 15, 2020</Article.Date>
                <Article.Description>This is suppouse that is the long description that i've build to this example of component</Article.Description>
                <Article.Tags>
                    <Tag link="https://joksantelles.com/" text="Social Media" />
                    <Tag link="https://joksantelles.com/" text="Design" />
                    <Tag link="https://joksantelles.com/" text="Branding" />
                </Article.Tags>
            </Article>

        </BlogArticles>

        <Footer />
    </>
)

function BlogArticles( props ) {
    return (
        <main className="BlogPage">
            <div className="container">
                { props.children }
            </div>
        </main>
    )
}

function Tag({ link, text}) {
    return (
        <a href={ link }><button className="button btn-small">
            { text }
        </button></a>
    )
}

export default Blog;