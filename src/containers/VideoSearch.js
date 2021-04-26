import React from 'react';
import { useState } from 'react';
import VideoList from '../components/VideoList'

const VideoSearch = () => {   

    async function searchYouTube(searchTerm) {
        // q = encodeURIComponent(q);
        const response = await fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${searchTerm}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
            "x-rapidapi-key": "931bd8e87fmsh0fd2ab219e7212ap1806bejsn8dd9a7988687"
          }
        });
        const videoData = await response.json();
        const filteredVideoData = videoData.items.filter(item => item.type === 'video');
        console.log(filteredVideoData)
        return filteredVideoData
    }

    const [ searchTerm, setSearchTerm ] = useState('top news today');
    const [ videoList, setVideoList ] = useState(null);

    const search = (e) => {
        e.preventDefault();
        searchYouTube(searchTerm).then(setVideoList);
        console.log(videoList)
    };

    const passDataToVideoList = () => {
        console.log(videoList)
        return (
            <div>
                <VideoList videoList={videoList}/>
            </div>
        )
    }

    return (
        <div className="video-search-form" >
            <h1>
                What visual experience you want to have today?
            </h1>
            <form onSubmit={search}>
                <input 
                    autoFocus 
                    value={searchTerm} 
                    onChange={e => setSearchTerm(e.target.value)} />
                <button>Search Video</button>
            </form>
            {passDataToVideoList()}
        </div>
    );
}
export default VideoSearch
