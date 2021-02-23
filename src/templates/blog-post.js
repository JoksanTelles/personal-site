import React from 'react'
import { graphql } from 'gatsby'
import BlogHeader from '../components/blog-header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Helmet } from 'react-helmet'

export default function Template({data}) {
    const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark

    return(
        <>
			<Helmet
				htmlAttributes={{
					lang: "es-MX",
				}}
				title={frontmatter.title}
				meta={[
					{
						name: 'description',
						content: 'Here\'s suppouse that it\'s the description',
					}
				]}
			/>
			<Navbar />

			<main className="ArticlePage">
				<BlogHeader
					title={ frontmatter.title }
					category={ frontmatter.category}
					description={frontmatter.description}
					date={frontmatter.date}
					image={frontmatter.cover}
					altImage="alguno de ejemplo"
				/>
				<article className="Article">
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</article>
				
			</main>

			<Footer />
        </>
    )
}

export const postQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter:  { slug:  { eq: $slug } }){
			html
			frontmatter {
				slug
				title
				date
				author
				category
				cover
				description
			}
		}
	}
`