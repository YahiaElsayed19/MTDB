export const IMG_PATH = "https://image.tmdb.org/t/p/w500/";
const extractData = (result, itemType) => {
    const type = result["media-type"] || itemType;
    const title = result[type === "movie" ? "title" : "name"] || result.title;
    const image = `${IMG_PATH}/${result["poster_path"]}`;
    const year = result[
        type === "movie" ? "release_date" : "first_air_date"
    ]?.slice(0, 4);
    const description = result["overview"];
    const stars = result["vote_average"].toFixed(1);
    const genreId = {
        movie: {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Science Fiction",
            10770: "TV Movie",
            53: "Thriller",
            10752: "War",
            37: "Western",
        },
        tv: {
            10759: "Action & Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            10762: "Kids",
            9648: "Mystery",
            10763: "News",
            10764: "Reality",
            10765: "Sci-Fi & Fantasy",
            10766: "Soap",
            10767: "Talk",
            10768: "War & Politics",
            37: "Western",
        },
    };

    return { title, image, year, description, stars };
};

export default extractData;
