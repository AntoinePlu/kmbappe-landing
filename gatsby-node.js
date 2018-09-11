/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 module: {
    loaders: [
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ]
  }