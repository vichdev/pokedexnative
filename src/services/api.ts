import axios from "axios";
const baseUrl = "https://pokeapi.co/api/v2/";

export const api = axios.create({
  baseURL: `${baseUrl}`,
});
