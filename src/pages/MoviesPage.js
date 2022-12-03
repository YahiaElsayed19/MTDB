import React from "react";
import { useInfiniteQuery } from "react-query";
import getData from "../components/API/getData";
import Item from "../components/Home/Item";
import classes from "./MoviesTvPage.module.css";
import GoToTop from '../Helpers/GoToTop'

const MoviesPage = () => {
    const { data: movies, isLoading, fetchNextPage } = useInfiniteQuery(
        "AllMovies",
        ({ pageParam = 1 }) => getData("movie", pageParam),
        {
            getNextPageParam: (lastPage) => {
                return lastPage.data.page < lastPage.data["total_pages"]
                    ? lastPage.data.page + 1
                    : undefined;
            },
        }
    );

        let  movieResult = movies?.pages.map((page) =>
            page.data.results.map((movie) => (
                <Item key={movie.id} result={movie} type="movie" />
            ))
        );
    
    const loadMore = () => fetchNextPage()
    window.onscroll = function () {
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
            loadMore()
        }
    }
    return <>
        <div className={classes.container}>{movieResult}</div>
        <GoToTop />
    </>
};

export default MoviesPage;
