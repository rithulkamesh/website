import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Rithul Kamesh`,
    siteUrl: `https://rithul.dev`
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-postcss"]
};

export default config;
