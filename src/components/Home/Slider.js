import { useQuery } from "react-query";
import GetData from "../API/getData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import classes from "./Slider.module.css";
import { Link } from "react-router-dom";
import Item from "./Item";
import getTopRated from "../API/getTopRated";

const Slider = () => {
    const { data: movies, isLoading: isLoadingMovies } = useQuery([`movie`], () =>
        GetData("movie")
    );
    const { data: tvShows, isLoading: isLoadingTv } = useQuery([`tv`], () =>
        GetData("tv")
    );
    const { data: topMovies, isLoading: isLoadingTopMovies } = useQuery([`topmovie`], () =>
    getTopRated("movie")
);
const { data: topTvShows, isLoading: isLoadingTopTv } = useQuery([`toptv`], () =>
getTopRated("tv")
);

    let moviesResult;
    if (!isLoadingMovies) {
        moviesResult = movies.data.results.map((movie) => (
            <SplideSlide key={movie.id}>
                <Item result={movie} type="movie" />
            </SplideSlide>
        ));
    }
    let tvResult;
    if (!isLoadingTv) {
        tvResult = tvShows.data.results.map((tvShow) => (
            <SplideSlide key={tvShow.id}>
                <Item result={tvShow} type="tv"/>
            </SplideSlide>
        ));
    }
    let topMoviesResult;
    if (!isLoadingTopMovies) {
        topMoviesResult = topMovies.data.results.map((movie) => (
            <SplideSlide key={movie.id}>
                <Item result={movie} type="movie" />
            </SplideSlide>
        ));
    }
    let topTvResult;
    if (!isLoadingTopTv) {
        topTvResult = topTvShows.data.results.map((tvShow) => (
            <SplideSlide key={tvShow.id}>
                <Item result={tvShow} type="tv"/>
            </SplideSlide>
        ));
    }

    return (
        <>
            <div className={classes.slider}>
                <div className={classes.container}>
                    <div className={classes.head}>
                        <div>Trending Movies</div>
                        <Link to='/home/movies'>See more</Link>
                    </div>
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
                    <div className={classes.head}>
                        <div>Trending Tv Shows</div>
                        <Link to="/home/tvshows">See more</Link>
                    </div>
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
                    <div className={classes.head}>
                        <div>Top Rated Movies</div>
                        <Link to="/home/topratedmovies">See more</Link>
                    </div>
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
            <div className={classes.slider}>
                <div className={classes.container}>
                    <div className={classes.head}>
                        <div>Top Rated Tv Shows</div>
                        <Link to="/home/topratedtvshows">See more</Link>
                    </div>
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
