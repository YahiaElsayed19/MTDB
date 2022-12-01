export const IMG_PATH = "https://image.tmdb.org/t/p/w500/";
const extractData = (result, itemType) => {
    const type = result["media-type"] || itemType;
    const title = result[type === "movie" ? "title" : "name"] || result.title;
    const image = `${IMG_PATH}/${result["poster_path"]}`;
    const year = result[
        type === "movie" ? "release_date" : "first_air_date"
    ]?.slice(0, 4);
    const description = result["overview"];
    return { title, image, year, description };
};

export default extractData;
