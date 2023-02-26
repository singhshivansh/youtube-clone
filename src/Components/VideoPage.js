import React, {useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import { RRELATED_API, YOUTUBE_ID_VIDEO, YOUTUBE_CHANNEL_ID } from '../utils/constants';
import { getViews, timeAgo, restrictText } from '../utils/helper';
import RelatedVideo from './RelatedVideo';
import { useDispatch } from 'react-redux';
import { closeSidebar, toggleSidebar } from '../utils/slices/navigationSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faShare, faHeartCirclePlus, faScissors, faEllipsisV } from '@fortawesome/free-solid-svg-icons';


const VideoPage = () => {
  const [relatedVideos, setrelatedVideos] = useState([]);
  const dispatch = useDispatch();
  const [videoDetails, setvideoDetails] = useState({});
  const [channelDetails, setchannelDetails] = useState({})
  const [showMore, setshowMore] = useState(false);

  useEffect(() => {
    dispatch(closeSidebar());
    getVideoDetails();
    getRelatedVideos();
  }, []);

  useEffect(() => {
    if(videoDetails?.snippet?.channelId){
      getChannelDetails();
    }
  }, [videoDetails])

  const getRelatedVideos = async () =>{
    let data = await fetch(RRELATED_API.replace('[VIDEO_ID]', videoId));
    data = await data.json();

    // console.log(data.items);
    setrelatedVideos(data.items);
  }
  const getVideoDetails = async () => {
    let data = await fetch(YOUTUBE_ID_VIDEO + videoId);
    data= await data.json();
    setvideoDetails(data.items[0]);
    
  }

  const getChannelDetails = async () => {
    let data = await fetch(YOUTUBE_CHANNEL_ID + videoDetails.snippet.channelId);
    data = await data.json();
    setchannelDetails(data.items[0]);
  }

  // const descriptionFn = (text) =>{
  //   if(text.length < 200)
  //     return;
  //   return <div>
  //     {text.substring(0, 200) + '...'} <button className='text-black'>Show</button>
  //   </div>
  // }
  
  const [v] = useSearchParams();
  const videoId = v.get('v');
 
  const playVideo = () => {
    const videoFrame = document.getElementsByTagName('iframe');
    
    videoFrame[0].click();
  }


  return (
    <div className='ml-16 flex'>
        <div className='w-2/3'>
          <div className='h-screen pt-5'>
            <iframe className='w-full h-2/3' onLoad={() => playVideo()} src={"https://www.youtube.com/embed/" + videoId}
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen></iframe>
            <div className='text-lg py-2 px-1 font-semibold'>
              {videoDetails?.snippet?.title}
            </div>
            <div>
              <div className='flex justify-between'>
                <div className='flex w-1/2'>
                  <img className='h-10 rounded-full' src={channelDetails?.snippet?.thumbnails?.default?.url} />
                  <div>
                    <p className='font-semibold px-2 text-sm'>{channelDetails?.snippet?.title}</p>
                    <p className='px-2 text-sm text-slate-500'>{getViews(channelDetails?.statistics?.subscriberCount)} subscribers</p>
                  </div>
                  <div className='flex flex-col justify-center'>
                    <button className='px-2 py-1 bg-black text-white rounded-2xl text-xs'>Subscribe</button>
                  </div>
                </div>
                <div className='flex justify-end w-1/2'>
                    <div className='flex flex-col justify-center ml-3'>
                      <div className=' flex bg-slate-200 rounded-3xl'>
                        <div className='text-sm py-1 px-2 cursor-pointer hover:bg-slate-300 bg-slate-200 rounded-l-3xl'>
                          <FontAwesomeIcon icon={faThumbsUp} /> <span className='text-xs'>{getViews(videoDetails?.statistics?.likeCount)}</span>
                        </div>
                        <div className='w-[1px] mt-1 h-2/3 bg-black'></div>
                        <div className='py-1 px-2 cursor-pointer hover:bg-slate-300 bg-slate-200 rounded-r-3xl'>
                          <FontAwesomeIcon icon={faThumbsDown} /> 
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center ml-3'>
                      <div className=' flex bg-slate-200 rounded-3xl hover:bg-slate-300'>
                        <div className='text-sm py-1 px-2 cursor-pointer'>
                          <FontAwesomeIcon className='pt-1 px-1' icon={faShare} />
                          <span className='text-xs'>Share</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center ml-3'>
                      <div className=' flex bg-slate-200 rounded-3xl hover:bg-slate-300'>
                        <div className='text-sm py-1 px-2 cursor-pointer'>
                          <FontAwesomeIcon className='pt-1 px-1' icon={faHeartCirclePlus} />
                          <span className='text-xs'>Thanks</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center ml-3'>
                      <div className=' flex bg-slate-200 rounded-3xl hover:bg-slate-300'>
                        <div className='text-sm py-1 px-2 cursor-pointer'>
                          <FontAwesomeIcon className='pt-1 px-1' icon={faScissors} />
                          <span className='text-xs'>Clip</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center ml-3'>
                      <div className=' flex bg-slate-200 rounded-3xl hover:bg-slate-300'>
                        <div className='text-sm py-1 px-2 cursor-pointer'>
                          <FontAwesomeIcon className='pt-1 px-1' icon={faEllipsisV} />
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          <div className='py-2 my-2 px-2 rounded-lg bg-slate-200'>
            <div className='text-sm font-semibold'>
              {getViews(videoDetails.statistics ? videoDetails.statistics.viewCount : null)} views . {videoDetails.snippet? timeAgo(videoDetails.snippet.publishedAt) : null} 
              <div className='font-normal'>
                {
                  !showMore?restrictText(videoDetails?.snippet?.description, 200) : videoDetails?.snippet?.description
                }
                {
                  showMore ? 
                  videoDetails?.snippet?.tags?.map(tag => <div>#{tag}</div> ) : null
                }
                <br></br>
                <button className='text-black' onClick={()=>setshowMore(!showMore)}>{showMore? 'Show Less' : 'Show More'}</button>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className='px-5 w-1/3'>
          {
            relatedVideos && relatedVideos.map(data => {
              return <RelatedVideo data={data} key={data.id.videoId} />
            })
          }
        </div>
    </div>
  )
}

export default VideoPage;