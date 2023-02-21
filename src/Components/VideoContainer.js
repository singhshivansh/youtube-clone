import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { getViews, timeAgo } from "../utils/helper";

const VideoContainer = () => {
    useEffect(() => {
        fetchVideos();
    }, [])

    // const data = {
    //     "kind": "youtube#video",
    //     "etag": "jrBakcHj5FJj-yqUKdsKuNjinio",
    //     "id": "a546lxxJIhE",
    //     "snippet": {
    //       "publishedAt": "2023-02-20T07:30:00Z",
    //       "channelId": "UC3XTzVzaHQEd30rQbuvCtTQ",
    //       "title": "Psychedelic Assisted Therapy: Last Week Tonight with John Oliver (HBO)",
    //       "description": "John Oliver discusses psychedelic assisted therapy: its history, its potential, and what it has to do with A$AP Rocky’s relationship to rainbows. \n\nConnect with Last Week Tonight online... \n\nSubscribe to the Last Week Tonight YouTube channel for more almost news as it almost happens: www.youtube.com/lastweektonight \n\nFind Last Week Tonight on Facebook like your mom would: www.facebook.com/lastweektonight \n\nFollow us on Twitter for news about jokes and jokes about news: www.twitter.com/lastweektonight \n\nVisit our official site for all that other stuff at once: www.hbo.com/lastweektonight",
    //       "thumbnails": {
    //         "default": {
    //           "url": "https://i.ytimg.com/vi/a546lxxJIhE/default.jpg",
    //           "width": 120,
    //           "height": 90
    //         },
    //         "medium": {
    //           "url": "https://i.ytimg.com/vi/a546lxxJIhE/mqdefault.jpg",
    //           "width": 320,
    //           "height": 180
    //         },
    //         "high": {
    //           "url": "https://i.ytimg.com/vi/a546lxxJIhE/hqdefault.jpg",
    //           "width": 480,
    //           "height": 360
    //         },
    //         "standard": {
    //           "url": "https://i.ytimg.com/vi/a546lxxJIhE/sddefault.jpg",
    //           "width": 640,
    //           "height": 480
    //         },
    //         "maxres": {
    //           "url": "https://i.ytimg.com/vi/a546lxxJIhE/maxresdefault.jpg",
    //           "width": 1280,
    //           "height": 720
    //         }
    //       },
    //       "channelTitle": "LastWeekTonight",
    //       "categoryId": "24",
    //       "liveBroadcastContent": "none",
    //       "localized": {
    //         "title": "Psychedelic Assisted Therapy: Last Week Tonight with John Oliver (HBO)",
    //         "description": "John Oliver discusses psychedelic assisted therapy: its history, its potential, and what it has to do with A$AP Rocky’s relationship to rainbows. \n\nConnect with Last Week Tonight online... \n\nSubscribe to the Last Week Tonight YouTube channel for more almost news as it almost happens: www.youtube.com/lastweektonight \n\nFind Last Week Tonight on Facebook like your mom would: www.facebook.com/lastweektonight \n\nFollow us on Twitter for news about jokes and jokes about news: www.twitter.com/lastweektonight \n\nVisit our official site for all that other stuff at once: www.hbo.com/lastweektonight"
    //       },
    //       "defaultAudioLanguage": "en-US"
    //     },
    //     "contentDetails": {
    //       "duration": "PT21M28S",
    //       "dimension": "2d",
    //       "definition": "hd",
    //       "caption": "false",
    //       "licensedContent": true,
    //       "regionRestriction": {
    //         "blocked": [
    //           "AU",
    //           "CA",
    //           "GB",
    //           "IS",
    //           "NZ"
    //         ]
    //       },
    //       "contentRating": {
            
    //       },
    //       "projection": "rectangular"
    //     },
    //     "statistics": {
    //       "viewCount": "1718455",
    //       "likeCount": "68502",
    //       "favoriteCount": "0",
    //       "commentCount": "7458"
    //     }
    //   };
    
    const [videosData, setvideosData] = useState([]);

    const fetchVideos = async () => {
        let data = await fetch(YOUTUBE_API);
        data = await data.json();

        // console.log(data);
        setvideosData(data.items)
    }
    return(<>
        <div className="pl-5">
            <div className="py-2" >
                {
                    Array(10).fill(1).map(item => {
                        return(
                            <button className="py-1 mx-1 px-2 bg-slate-300 rounded-md">Mixes</button>
                        )
                    })
                }
            </div>

            <div className="grid grid-cols-4 gap-2">
                {
                    videosData.map(data => {
                        return(
                            <div className="py-2">
                                <div className="rounded-md">
                                    <img className="rounded-xl" src={data.snippet.thumbnails.medium.url} />
                                </div>
                                <div>
                                    <p className="text-sm px-2 font-semibold w-full">{data.snippet.title}</p>
                                    <p className="text-xs text-gray-600 px-2">{data.snippet.channelTitle}</p>
                                    <p className="px-2 text-xs text-gray-500">
                                        {getViews(data.statistics.viewCount)} views . {timeAgo(data.snippet.publishedAt)}
                                    </p>
                                    
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </>)
}

export default VideoContainer;