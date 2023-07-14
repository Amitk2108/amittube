import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "IN" },
  headers: {
    "X-RapidAPI-Key": "0cfb2651d8msh4d6db1e550fb3a0p13962ejsndb1e37a448cd",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const ApiData = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
