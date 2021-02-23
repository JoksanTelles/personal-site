exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogPost = require.resolve(`./src/templates/blog-post.js`)
    const result = await graphql(`
      {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
        ) {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        category
                        date
                        author
                    }
                }
            }
        }
      }
    `)
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPost,
        context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
        },
      })
    })
  }