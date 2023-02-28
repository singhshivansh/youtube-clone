import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const VideoContainer = () => {
    useEffect(() => {
        fetchVideos();
    }, [])

    const [videosData, setvideosData] = useState([]);

    const fetchVideos = async () => {
        let data = await fetch(YOUTUBE_API);
        data = await data.json();

        // console.log(data);
        setvideosData(data.items)
    }
    const headerData = ['Mixes', 'Music', 'Programming', 'Sports', 'Physics', 'History',
     'Comedy', 'Bollywood', 'Hollywood', 'Trending', 'Gaming', 'News', 'Movies', 'Shows', 'Learning', 'Live', 'Critism',  ];
    return(<>
        <div className="pl-3">
            
            <div className="py-2 px-5 flex overflow-x-hide w-11/12 h-12 will-change-scroll" >
                <div className="flex flex-col justify-center">
                    <FontAwesomeIcon className="p-3 text-slate-300 h-7 hover:text-slate-400 cursor-pointer" icon={faChevronCircleLeft} />
                </div>
                {
                    headerData.map((item, index) => {
                        return(
                            // <p className="flex whitespace-pre-wrap px-2 mx-2 bg-slate-300">
                            //     {item}
                            // </p>
                            <button key={item + index} className="py-1 mx-1 px-2  text-xs bg-slate-300 rounded-md font-semibold">
                                {/* <p className="py-2 px-2"> */}
                                {item}
                                {/* </p> */}
                            </button>
                        )
                    })
                }
                <div className="flex flex-col justify-center ">
                    <FontAwesomeIcon className="p-3 text-slate-300 h-7 hover:text-slate-400 cursor-pointer" icon={faChevronCircleRight} />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
                {
                    videosData && videosData.map(data => {
                        return(
                            <VideoCard data={data} />
                        )
                    })
                }
                
            </div>
        </div>
    </>)
}

export default VideoContainer;