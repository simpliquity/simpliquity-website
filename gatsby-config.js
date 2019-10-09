const path = require(`path`);

module.exports = {
    siteMetadata: {
        title: `Simpliquity`,
        description: ``,
        author: `Simpliquity Studio Sàrl`
    },
    plugins: [
        //{
        //    resolve: "gatsby-plugin-material-ui",
        //    // If you want to use styled components you should change the injection order.
        //    options: {
        //        //stylesProvider: {
        //        //    injectFirst: true
        //        //}
        //    }
        //},
        //`gatsby-plugin-styled-components`,
        //`gatsby-plugin-favicon`,
        //{
        //    resolve: `gatsby-source-filesystem`,
        //    options: {
        //        name: `images`,
        //        path: `${__dirname}/src/images`
        //    }
        //},
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`)
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Simpliquity`,
                short_name: `Simpliquity`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                display: `minimal-ui`,
                icon: `src/images/simpliquity_logo.png` // This path is relative to the root of the site.
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ]
};
