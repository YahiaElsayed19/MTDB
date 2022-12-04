import { useQuery } from "react-query";
import GetData from "../API/getData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import classes from "./Slider.module.css";
import { Link } from "react-router-dom";
import Item from "./Item";
import getTopRated from "../API/getTopRated";

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
                        <Link to="/home/top-rated-movies">See more</Link>
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
            <div className={`${classes.slider} ${classes.last}`}>
                <div className={classes.container}>
                    <div className={classes.head}>
                        <div>Top Rated Tv Shows</div>
                        <Link to="/home/top-rated-tvshows">See more</Link>
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
