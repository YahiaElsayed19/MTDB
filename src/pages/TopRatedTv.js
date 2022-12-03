import React from "react";
import { useInfiniteQuery } from "react-query";
import getTopRated from '../components/API/getTopRated'
import Item from "../components/Home/Item";
import classes from "./MoviesTvPage.module.css";
import GoToTop from '../Helpers/GoToTop'

const TopRatedTv = () => {
    const { data: tvShows, isLoading, fetchNextPage } = useInfiniteQuery(
        "AllTopTvShows",
        ({ pageParam = 1 }) => getTopRated("tv", pageParam),
        {
            getNextPageParam: (lastPage) => {
                return lastPage.data.page < lastPage.data["total_pages"]
                    ? lastPage.data.page + 1
                    : undefined;
            },
        }
    );
    let tvShowsResult;
    if (!isLoading) {
        tvShowsResult = tvShows?.pages.map((page) =>
            page.data.results.map((tvShow) => (
                <Item key={tvShow.id} result={tvShow} type="tv" />
            ))
        );
    }
    const loadMore = () => fetchNextPage()
    window.onscroll = function () {
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
            loadMore()
        }
    }
    return<>
    <div className={classes.container}>{tvShowsResult}</div>
    <GoToTop/>
    </> 
};

export default TopRatedTv;
