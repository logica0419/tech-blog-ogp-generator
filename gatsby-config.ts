import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Tech Blog OGP Generator",
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-eslint"],
};

export default config;
