const { flatten } = require("flat");

if (!process.env.IS_CI) {
  require("dotenv").config();
}

const config = {
  api: {
    url: "https://api-url.com",
    token: process.env.API_TOKEN
  }
};

const flattenConfig = flatten(config);
const result = Object.keys(flattenConfig).map(keys => `${keys}=${flattenConfig[keys]}`).join(" ");
console.log(result);
