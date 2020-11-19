module.exports = (eleventyConfig) => {
  // Extend  the default 11ty config.
  require("./.eleventy.config")(eleventyConfig);

  return {
    dir: {
      input: "src/site-2",
      output: "dist/site-2",
    },
  };
};
