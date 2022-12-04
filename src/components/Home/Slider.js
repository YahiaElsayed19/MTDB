import { useQuery } from "react-query";
import GetData from "../API/getData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import classes from "./Slider.module.css";
import Item from "./Item";
import getTopRated from "../API/getTopRated";
import Head from "./Head";

const Slider = () => {
    const { data: movies } = useQuery([`movie`], () =>
        GetData("movie")
    );
    const { data: tvShows } = useQuery([`tv`], () =>
        GetData("tv")
    );
    const { data: topMovies } = useQuery([`topmovie`], () =>
        getTopRated("movie")
    );
    const { data: topTvShows } = useQuery([`toptv`], () =>
        getTopRated("tv")
    );

    let moviesResult = movies?.data.results.map((movie) => (
        <SplideSlide key={movie.id}>
            <Item result={movie} type="movie" />
        </SplideSlide>
    ));

    let tvResult = tvShows?.data.results.map((tvShow) => (
        <SplideSlide key={tvShow.id}>
            <Item result={tvShow} type="tv" />
        </SplideSlide>
    ));

    let topMoviesResult = topMovies?.data.results.map((movie) => (
        <SplideSlide key={movie.id}>
            <Item result={movie} type="movie" />
        </SplideSlide>
    ));

    let topTvResult = topTvShows?.data.results.map((tvShow) => (
        <SplideSlide key={tvShow.id}>
            <Item result={tvShow} type="tv" />
        </SplideSlide>
    ));

    return (
        <>
            <div className={classes.slider}>
                <div className={classes.container}>
                    <Head title="Trending Movies" link="/home/movies" />
                    <Splide
                        options={{
                            autoWidth: true,
                            pagination: false,
                        }}
                    >
                        {moviesResult}
                    </Splide>
                </div>
            </div>
            <div className={classes.slider}>
                <div className={classes.container}>
                    <Head title="Trending Tv Shows" link="/home/tvshows" />
                    <Splide
                        options={{
                            autoWidth: true,
                            pagination: false,
                        }}
                    >
                        {tvResult}
                    </Splide>
                </div>
            </div>
            <div className={classes.slider}>
                <div className={classes.container}>
                    <Head title="Top Rated Movies" link="/home/top-rated-movies" />
                    <Splide
                        options={{
                            autoWidth: true,
                            pagination: false,
                        }}
                    >
                        {topMoviesResult}
                    </Splide>
                </div>
            </div>
            <div className={`${classes.slider} ${classes.last}`}>
                <div className={classes.container}>
                    <Head title="Top Rated Tv Shows" link="/home/top-rated-tvshows" />
                    <Splide
                        options={{
                            autoWidth: true,
                            pagination: false,
                        }}
                    >
                        {topTvResult}
                    </Splide>
                </div>
            </div>
        </>
    );
};

export default Slider;
