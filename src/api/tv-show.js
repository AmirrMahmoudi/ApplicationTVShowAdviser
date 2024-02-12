import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY_PARAM = "?api_key=0098a975dc4187b208decec2e502adda";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    console.log(response.data.results);
    return response.data.results;
  }
}
