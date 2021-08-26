const { CreateLogger } = require("../model/Logger");

module.exports.logger = async (req, res, next) => {
  await CreateLogger(req._parsedUrl.pathname, { ...req.params, ...req.query });
  next();
};
