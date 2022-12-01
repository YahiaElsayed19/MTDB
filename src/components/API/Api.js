import axios from "axios";
const API_KEY = "3cbce4352fa1ccd74220de20ca7877bc";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: API_KEY,
    },
});