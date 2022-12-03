import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";
import getData from "../components/API/getData";
import searchData from "../components/API/searchData";
import Item from "../components/Home/Item";
import classes from "./MoviesTvPage.module.css";
import GoToTop from '../Helpers/GoToTop'

const TvShowsPage = () => {
    const [searchQuery, setSearchQuery] = useState(null)
    const onChangeHandler = (e) => {
        setSearchQuery(e.target.value)
    }

    const { data: tvShows, isFetchingNextPage, fetchNextPage } = useInfiniteQuery(
        `AllTvShows ${searchQuery}`,
        ({ pageParam = 1 }) => searchQuery ? searchData('tv', searchQuery, pageParam) : getData("tv", pageParam),
        {
            getNextPageParam: (lastPage) => {
                return lastPage.data.page < lastPage.data["total_pages"]
                    ? lastPage.data.page + 1
                    : undefined;
            },
        }
    );

    let tvShowsResult = tvShows?.pages.map((page) =>
        page.data.results.map((tvShow) => (
            <Item key={tvShow.id} result={tvShow} type="tv" />
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
        <div className={classes.container}>{tvShowsResult}</div>
        {isFetchingNextPage && <div class="lds-ring"><div></div><div></div><div></div><div></div></div>}
        <GoToTop />
    </>
};

export default TvShowsPage;
