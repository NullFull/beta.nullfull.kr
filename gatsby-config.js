module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-143097345-2",
      },
    },
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `ko`
      }
    }
  ],
}
