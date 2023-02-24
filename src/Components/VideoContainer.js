import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";

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
                            <VideoCard data={data} />
                        )
                    })
                }
                
            </div>
        </div>
    </>)
}

export default VideoContainer;