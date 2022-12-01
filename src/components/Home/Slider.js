import { useQuery } from 'react-query'
import GetData from '../API/getData'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import classes from './Slider.module.css'
const Slider = () => {
    const { data: movies, isLoading: isLoadingMovies } = useQuery([`movie`], () =>
        GetData("movie")
    );
    const { data: tvShows, isLoading: isLoadingTv } = useQuery([`tv`], () =>
        GetData("tv")
    );
    let moviesResult
    if (!isLoadingMovies) {
        moviesResult = movies.data.results.map(movie =>
            <SplideSlide key={movie.id} className={classes.item}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie['poster_path']}`} alt='poster'></img>
                <div className={classes.name}>{movie.title} ({movie['release_date'].slice(0, 4)})</div>
            </SplideSlide>
        );
    }
    let tvResult
    if (!isLoadingTv) {
        tvResult = tvShows.data.results.map(tvShow =>
            <SplideSlide key={tvShow.id} className={classes.item}>
                <img src={`https://image.tmdb.org/t/p/w500/${tvShow['poster_path']}`} alt='poster'></img>
                <div className={classes.name}>{tvShow.name} ({tvShow['first_air_date'].slice(0, 4)})</div>
            </SplideSlide>
        );
    }
    return (
        <>
            <div className={classes.slider}>
                <Splide className={classes.container}
                    options={{
                        perPage: 3,
                        perMove: 2,
                    }}>
                    {moviesResult}
                </Splide>
            </div>
            <div className={classes.slider}>

                <Splide className={classes.container}
                    options={{
                        perPage: 3,
                        perMove: 3,
                    }}>
                    {tvResult}
                </Splide>
            </div>
        </>
    )
}

export default Slider