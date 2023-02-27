import React, {useState, useEffect} from 'react';
import search from "../../assets/images/magnifying-glass.png";
import { SEARCH_API } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addSearchObj } from '../../utils/slices/searchCacheSlice';
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { openSuggestion, closeSuggestion } from '../../utils/slices/navigationSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {

    const [searchText, setsearchText] = useState('');
    const [suggestionList, setsuggestionList] = useState([]);
    const dispatch = useDispatch();
    const chachedResults = useSelector(store => store.searchCache);
    const isSuggestionVisible = useSelector(store => store.navigation.isSuggestionVisible);
    useEffect(() => {
        if(chachedResults[searchText]){
            setsuggestionList(chachedResults[searchText]);
        }else{
            const timer = setTimeout(fetchSuggestion(), 200);
            return () => {
                clearTimeout(timer);
            }
        }
    }, [searchText]);

    const fetchSuggestion = async () => {
        let data = await fetch(SEARCH_API + searchText);
        data = await data.json();
        setsuggestionList(data[1]);
        const searchObj = {
            [searchText] : data[1]
        }
        dispatch(addSearchObj(searchObj));
    }

    const handleSearch = (e) => {
        setsearchText(e.target.value);
    }

    return (
    <>
        <div className="flex justify-center  ">
            <input className="appearance-none border-gray-300 px-3 rounded-l-full w-full border-2 focus:border-blue-600" 
            onFocus={()=>dispatch(openSuggestion())}
            // onBlur={() => sethideSuggestion(false)}
            value={searchText} onChange={handleSearch} placeholder="Search" />
            <div className="p-2  bg-gray-200 rounded-r-3xl">
                <img className="h-5" src={search} />
                
            </div>
            <div className='flex flex-col justify-center'>
                <div className=''>
                    <FontAwesomeIcon icon={faMicrophone} />
                </div>
            </div>
        </div>
        <div className='absolute w-1/3 ml-2 rounded-md bg-white py-1'>
            {
                isSuggestionVisible && suggestionList.map(item => {
                    return(
                        <Link to={'/results?search_query=' + item}>
                            <div className='flex px-3 py-1 hover:bg-slate-200 hover:cursor-pointer'>
                                <div className='flex flex-col justify-center pr-2'>
                                    <img className=" h-3"
                                    src={search} />
                                </div>
                                {item}
                            </div>
                         </Link>
                    )
                })
            }

        </div>
    </>
)
}

export default SearchBar;