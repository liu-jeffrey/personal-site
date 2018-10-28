const GHPages = process.env.GH_PAGES === "true";

if (GHPages) console.log("Detected build environment: Github Pages");

module.exports = {
  // Make sure that if we are building for Github Pages, we load all the
  // resources from /personal-site/... rather than from root (/...).
  baseUrl: GHPages ? "/personal-site" : undefined
};
