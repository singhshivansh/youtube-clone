import React from 'react';
import { timeAgo, restrictText } from "../utils/helper";
import { Link } from "react-router-dom";

const RelatedVideo = ({data}) => {
  return (
    <>
        <div className="py-2 cursor-pointer" key={data.id}>
                <Link to={'/watch?v='+data.id}>
                <div className='flex'>
                    <div className="flex flex-col justify-center rounded-sm w-48">
                        <img className="rounded-md" src={data.snippet.thumbnails.medium.url} />
                    </div>
                    <div className="py-2">
                        <p className="text-sm px-2 font-semibold w-full">{restrictText(data.snippet.title, 50)}</p>
                        <p className="text-xs text-gray-600 px-2">{data.snippet.channelTitle}</p>
                        <p className="px-2 text-xs text-gray-500">
                            {timeAgo(data.snippet.publishedAt)}
                        </p>
                        
                    </div>
                </div>
            </Link>
        </div>
    </>
  )
}

export default RelatedVideo