<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## How my CSS is structured

### Layout - What are they?
Layouts are the composition of a page that is repeatedly constantly and for improvement, they are design as a page composition field. Inside them, you can add components to create the general design.
- Front Page
- Page
- Post
- Single
- Portfolio
- Project

### Components - What are they?
Components are a lil' piece of design that you can put whatever you want in order to create the complete user interface. They are pieces of software that you can build in time to improve design


  ├─ fonts.scss
  ├─ globals
  │   ├─ normalize.scss
  │   ├─ variables.scss
  │   ├─ mixins.scss
  │   └─ scaffonlding.scss
  ├─ components
  │   ├─ navbar.scss
  │   └─ accordion.scss
  └─ pages / layout
      ├─ front-page.scss       —— Home page
      ├─ page.scss             —— All pages
      ├─ post.scss             —— All posts
      ├─ single.scss           —— Single post
      └─ single-portfolio.scss —— Single project