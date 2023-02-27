import React, {useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_KEYWORD_SEARCH } from '../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { closeSuggestion } from '../utils/slices/navigationSlice';
import SearchedVideo from './SearchedVideo';

const VideoSearch = () => {
    const [params] = useSearchParams();
    const [searchedVideoes, setsearchedVideoes] = useState([]);
    const search_query = params.get('search_query');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeSuggestion());
        fetchSearchedVideo();
    }, [])

    const fetchSearchedVideo = async () => {
        let data = await fetch(YOUTUBE_KEYWORD_SEARCH + search_query);
        data = await data.json();
        setsearchedVideoes(data.items);
        // console.log(data);
    }
    return (
        <>
            {
                searchedVideoes && searchedVideoes.map(item => {
                    return <SearchedVideo data={item} />
                })
            }
        </>
    )
}

export default VideoSearch