const axios = require("axios");

module.exports.DEFAULT_PARAMS = {
  apiKey: process.env.API_KEY,
};

module.exports.axios = axios.create({
  baseURL: "http://www.omdbapi.com",
  timeout: 1000,
});
