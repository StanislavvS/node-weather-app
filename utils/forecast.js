const request = require("request");

const forecast = ({ longitude, latitude }, callback) => {
  const url = `https://api.weatherstack.com/current?access_key=1522190030d7088d391a2b8fb5369267&query=${latitude},${longitude}&units=f`;
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to message service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]} It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike}`
      );
    }
  });
};

module.exports = forecast;
