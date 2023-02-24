import React, {useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import { RRELATED_API } from '../utils/constants';
import RelatedVideo from './RelatedVideo';
import { useDispatch } from 'react-redux';
import { closeSidebar, toggleSidebar } from '../utils/slices/navigationSlice';

const VideoPage = () => {
  const [relatedVideos, setrelatedVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
    getRelatedVideos();
  }, []);

  const getRelatedVideos = async () =>{
    let data = await fetch(RRELATED_API.replace('[VIDEO_ID]', videoId));
    data = await data.json();

    // console.log(data.items);
    setrelatedVideos(data.items);
  }
  
  const [v] = useSearchParams();
  const videoId = v.get('v');
 
  const playVideo = () => {
    const videoFrame = document.getElementsByTagName('iframe');
    
    videoFrame[0].click();
  }


  return (
    <div className='ml-16 flex'>
        <div>
          <iframe onLoad={() => playVideo()} width="800" height="450" src={"https://www.youtube.com/embed/" + videoId}
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen></iframe>
        </div>
        <div className='px-5 w-1/3'>
          {
            relatedVideos.map(data => {
              return <RelatedVideo data={data} />
            })
          }
        </div>
    </div>
  )
}

export default VideoPage