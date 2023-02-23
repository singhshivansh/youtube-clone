import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';


const VideoPage = () => {
    
  const [v] = useSearchParams();
  const videoId = v.get('v');
 
  const playVideo = () => {
    const videoFrame = document.getElementsByTagName('iframe');
    
    console.log(videoFrame[0]);
    videoFrame[0].click();
  }

  return (
    <div className='ml-16'>
        <iframe onLoad={() => playVideo()} width="800" height="450" src={"https://www.youtube.com/embed/" + videoId}
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
    </div>
  )
}

export default VideoPage