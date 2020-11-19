module.exports = (eleventyConfig) => {
  // Extend  the default 11ty config.
  require("./.eleventy.config")(eleventyConfig);

  eleventyConfig.addLayoutAlias("base", "layouts/base.liquid");

  return {
    dir: {
      // data: "../_data",
      input: "src/site-1",
      output: "dist/site-1",
    },
  };
};
