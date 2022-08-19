const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const address = process.argv[2];

if (!address) {
  console.log("Please provide address");
} else {
  geocode(address, (error, { location, longitude, latitude } = {}) => {
    if (error) {
      return console.log(`Error ${error}`);
    }
    forecast({ location, longitude, latitude }, (error, forecastData) => {
      if (error) {
        return console.log(`Error ${error}`);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
