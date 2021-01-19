module.exports = {
  ci: {
    collect: {
      staticDistDir: "./exampleSite/public",
      numberOfRuns: 5,
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:recommended",
    },
  },
};
