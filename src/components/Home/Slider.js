import { useQuery } from "react-query";
import GetData from "../API/getData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import classes from "./Slider.module.css";
import { Link } from "react-router-dom";
import Item from "./Item";

const Slider = () => {
    const { data: movies, isLoading: isLoadingMovies } = useQuery([`movie`], () =>
        GetData("movie")
    );
    const { data: tvShows, isLoading: isLoadingTv } = useQuery([`tv`], () =>
        GetData("tv")
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
                <Item result={tvShow} type="tvshow"/>
            </SplideSlide>
        ));
    }
    return (
        <>
            <div className={classes.slider}>
                <div className={classes.container}>
                    <div className={classes.head}>
                        <div>Trending Movies</div>
                        <Link>See more</Link>
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
                        <Link>See more</Link>
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
        </>
    );
};

export default Slider;
