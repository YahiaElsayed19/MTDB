export const IMG_PATH = "https://image.tmdb.org/t/p/w500/";
const extractData = (result, itemType) => {
    const type = result["media-type"] || itemType;
    const title = result[type === "movie" ? "title" : "name"] || result.title;
    const id = result.id
    const image = `${IMG_PATH}/${result["poster_path"]}`;
    const year = result[
        type === "movie" ? "release_date" : "first_air_date"
    ]?.slice(0, 4);
    const description = result["overview"];
    const stars = result["vote_average"].toFixed(1);
    const ids = result['genre_ids']
    return { id,title, image, year, description, stars, ids };
};

export default extractData;
