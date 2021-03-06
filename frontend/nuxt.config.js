module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "frontend",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  // Add apollo module
  modules: ["@nuxtjs/apollo"],
  // Give apollo module options
  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: {
        // required
        httpEndpoint: "http://localhost:4000/graphql",
        wsEndpoint: "ws://localhost:4000/graphql" // optional
      }
    }
  }
};
