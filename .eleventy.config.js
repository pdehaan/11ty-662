module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("banner", () => `I'm a banner!`);
};
