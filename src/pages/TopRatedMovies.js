import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";
import Item from "../components/Home/Item";
import classes from "./MoviesTvPage.module.css";
import GoToTop from '../Helpers/GoToTop'
import getTopRated from '../components/API/getTopRated'
import searchData from "../components/API/searchData";

const TopRatedMovies = () => {
    const [searchQuery, setSearchQuery] = useState(null)
    const onChangeHandler = (e) => {
        setSearchQuery(e.target.value)
    }

    const { data: movies, isLoading, fetchNextPage } = useInfiniteQuery(
        `AllTopRatedMovies ${searchQuery}`,
        ({ pageParam = 1 }) => searchQuery ? searchData("movie", searchQuery, pageParam) : getTopRated("movie", pageParam),
        {
            getNextPageParam: (lastPage) => {
                return lastPage.data.page < lastPage.data["total_pages"]
                    ? lastPage.data.page + 1
                    : undefined;
            },
        }
    );

    let movieResult = movies?.pages.map((page) =>
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
        <div className={classes.search}>
            <input type='text' placeholder="search" onChange={onChangeHandler} />
        </div>
        <div className={classes.container}>{movieResult}</div>
        <GoToTop />
    </>
};

export default TopRatedMovies;
