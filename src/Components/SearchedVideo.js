import React from 'react';
import { Link } from 'react-router-dom';
import { restrictText, timeAgo, getViews } from '../utils/helper';

const SearchedVideo = ({data}) => {
    console.log(data);
  return (
    <>
        <div className="py-2 pl-16 ml-16 cursor-pointer" key={data.id}>
                <Link to={'/watch?v='+data.id.videoId}>
                <div className='flex'>
                    <div className="flex flex-col justify-center rounded-sm w-64">
                        <img className="rounded-md w-64" src={data.snippet.thumbnails.medium.url} />
                    </div>
                    <div className="py-2">
                        <p className="text-sm px-2 font-semibold w-full">{restrictText(data.snippet.title, 100)}</p>
                        <div className='flex'>
                            <p className="text-xs text-gray-600 px-2">{getViews(Math.floor((Math.random() * 10000000) + 1))} views</p>
                            
                            <p className="px-1 text-xs text-gray-500">
                                {timeAgo(data.snippet.publishedAt)}
                            </p>
                        </div>
                        <div className='px-3 flex py-2'>
                            <img className='h-6 w-6 rounded-full' src={data.snippet.thumbnails.medium.url} />
                            <p className='text-xs flex justify-center flex-col px-2 '>{data.snippet.channelTitle}</p>
                        </div>
                        <div className='text-xs text-slate-500 px-2'>
                            {restrictText(data.snippet.description, 100)}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </>
  )
}

export default SearchedVideo;