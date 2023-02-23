import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { getViews, timeAgo } from "../utils/helper";
import { Link } from "react-router-dom";

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
    const headerData = ['Mixes', 'Music', 'Programming', 'Sports', 'Cricket', 'Physics', 'Chemistry'];
    return(<>
        <div className="pl-5">
            <div className="py-2" >
                {
                    headerData.map((item, index) => {
                        return(
                            <button key={item + index} className="py-1 mx-1 px-2 bg-slate-300 rounded-md">{item}</button>
                        )
                    })
                }
            </div>

            <div className="grid grid-cols-4 gap-2">
                {
                    videosData.map(data => {
                        return(
                            <div className="py-2 cursor-pointer" key={data.id}>
                                    <Link to={'/watch?v='+data.id}>
                                    <div className="rounded-md">
                                        <img className="rounded-xl" src={data.snippet.thumbnails.medium.url} />
                                    </div>
                                    <div className="py-2">
                                        <p className="text-sm px-2 font-semibold w-full">{data.snippet.title}</p>
                                        <p className="text-xs text-gray-600 px-2">{data.snippet.channelTitle}</p>
                                        <p className="px-2 text-xs text-gray-500">
                                            {getViews(data.statistics.viewCount)} views . {timeAgo(data.snippet.publishedAt)}
                                        </p>
                                        
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </>)
}

export default VideoContainer;