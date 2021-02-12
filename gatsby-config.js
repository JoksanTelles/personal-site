module.exports = {
  siteMetadata: {
    title: "Joksan Telles",
    siteUrl: `https://www.joksantelles.com`,
    description: `Front-End Developer and UI/UX Designer`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        icon: `src/images/favicon/favicon-32x32.png`, // This path is relative to the root of the site.
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    }
  ],
};
