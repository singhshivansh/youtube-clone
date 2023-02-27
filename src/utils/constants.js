// const API_KEY = "AIzaSyAKvQ-QvF3YYFw5OOa9C42VWBxqM2j8j0w";
const API_KEY = "AIzaSyBop-NQnholFCeyJE88uaNDp_bBVC3blIw";
// const API_KEY = '';

export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=AU&key=' + API_KEY;
export const RRELATED_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=[VIDEO_ID]&maxResults=50&type=video&key=' + API_KEY;
export const SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
export const YOUTUBE_ID_VIDEO = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=' + API_KEY + '&id=';
export const YOUTUBE_CHANNEL_ID = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&key=' + API_KEY + '&id=';
export const YOUTUBE_KEYWORD_SEARCH = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=' + API_KEY + '&q=';