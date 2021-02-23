import React from "react"
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import PageHeader from '../../components/page-header'
import Helmet from 'react-helmet'
import Article from "../../components/blog-article"
import { graphql } from "gatsby"

const Blog = ( {data} ) => (
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

            {data.allMarkdownRemark.edges.map(post => (
                <Article
                    LinkImage={post.node.frontmatter.cover}
                    LinkArticle={post.node.frontmatter.slug}
                    Key={post.node.id}
                >
                    <Article.Title>{post.node.frontmatter.title}</Article.Title>
                    <Article.Category>{post.node.frontmatter.category}</Article.Category>
                    <Article.Date>{post.node.frontmatter.date}</Article.Date>
                    <Article.Description>
                        {post.node.frontmatter.description}
                    </Article.Description>
                    <Tag>{post.node.frontmatter.author}</Tag>

                </Article>
            ))}
            
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

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {}, limit: 1000) {
            edges {
                node {
                    id
                    frontmatter {
                        slug
                        title
                        date
                        author
                        category
                        description
                        cover
                    }
                }
            }
        }
    }
`

export default Blog;