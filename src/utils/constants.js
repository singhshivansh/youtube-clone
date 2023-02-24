const API_KEY = "AIzaSyAKvQ-QvF3YYFw5OOa9C42VWBxqM2j8j0w";

export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + API_KEY;
export const RRELATED_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=[VIDEO_ID]&maxResults=50&type=video&key=' + API_KEY;