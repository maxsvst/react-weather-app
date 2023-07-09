import axios from "axios";

export const GeoService = {
  async getCity(inputName) {
    try {
      const { data } = await axios(
        "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
        {
          params: {
            namePrefix: inputName,
            minPopulation: 100000,
            languageCode: "ru",
          },
          headers: {
            "X-RapidAPI-Key":
              "4f36c6855cmsh7c138a4261d1f58p13e09bjsn35d4a7375a5a",
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        }
      );
      return {
        options: data.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.city}, ${city.country}`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  },
  async getWeatherByCity(lat, lon) {
    try {
      const { data } = await axios(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat,
            lon,
            lang: "ru",
            units: "metric",
            appid: "64496c89f6baf98bda6b5dbb308ea1c7",
          },
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async getWeatherForecast(lat, lon) {
    try {
      const { data } = await axios(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
          params: {
            lat,
            lon,
            lang: "ru",
            units: "metric",
            appid: "64496c89f6baf98bda6b5dbb308ea1c7",
          },
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};
