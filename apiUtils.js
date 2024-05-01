const axios = require("axios");
const { apiBaseUrl, apiKey } = require("./config");

async function fetchData(symbol) {
  const url = `${apiBaseUrl}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error.response;
  }
}

module.exports = {
  fetchData,
};
