const request = require("request");

let getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/fc471a9adf721c8d1f04dc0aaf7e6a6a/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("Unable to connect to Forecast.io server");
      } else if (response.statusCode === 400) {
        callback("Unable to fetch weather.");
      } else if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      }
    }
  );
};

module.exports.getWeather = getWeather;
