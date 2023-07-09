import axios from "axios";

export const CitySercice = {
  async getCity(inputName) {
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
  },
};
