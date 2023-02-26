import React from 'react';
import { getViews, timeAgo, restrictText } from "../utils/helper";
import { Link } from "react-router-dom";

const VideoCard = ({data}) => {
    console.log(getViews(data.statistics ? data.statistics.viewCount  + 'views': null));
  return (
    <>
        <div className="py-2 cursor-pointer" key={data.id}>
                <Link to={'/watch?v='+data.id}>
                <div className="rounded-md">
                    <img className="rounded-xl" src={data.snippet.thumbnails.medium.url} />
                </div>
                <div className="py-2">
                    <p className="text-sm px-2 font-semibold w-full">{restrictText(data.snippet.title, 50)}</p>
                    <p className="text-xs text-gray-600 px-2">{data.snippet.channelTitle}</p>
                    <p className="px-2 text-xs text-gray-500">
                        {getViews(data.statistics ? data.statistics.viewCount : null)} . {timeAgo(data.snippet.publishedAt)}
                    </p>
                    
                </div>
            </Link>
        </div>
    </>
  )
}

export default VideoCard;