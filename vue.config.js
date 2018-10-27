const GHPages = process.env.GH_PAGES === true;

module.exports = {
  // Make sure that if we are building for Github Pages, we load all the
  // resources from /personal-site/... rather than from root (/...).
  baseUrl: GHPages ? "/personal-site" : undefined
};
