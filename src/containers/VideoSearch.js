import React from 'react';
import { useState } from 'react';
import VideoList from '../components/VideoList'
import '../style/video.css'


const VideoSearch = () => {   

    async function searchYouTube(searchTerm) {
        try {
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
        } catch (error) { alert(error) };
    }

    const [ searchTerm, setSearchTerm ] = useState('most epic movie soundtrack');
    const [ videoList, setVideoList ] = useState(null);

    const search = (e) => {
        e.preventDefault();
        searchYouTube(searchTerm).then(setVideoList);
    };

    return (
        <div className="video-container" >
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
            <VideoList videoList={videoList} />

            {/* {videoList && (videoList.length === 0 ? <p>No video found</p> : (
                    <ul className="items">
                        {videoList.map(item => (
                            <li className="item" key={item.id}>
                            <div>
                                <b><a href={item.link} target="_blank">{item.title}</a></b>
                                <p>{item.description}</p>
                            </div>
                            <ul className="meta">
                                <li>By: <a href={item.author.ref} target="_blank">{item.author.name}</a></li>
                                <li>Views: {item.views}</li>
                                <li>Duration: {item.duration}</li>
                                <li>Uploaded: {item.uploaded_at}</li>
                            </ul>
                            <img alt="" src={item.thumbnail} />
                            </li>
                            )
                        )}
                    </ul>)
                )
            } */}
        </div>
    );
}
export default VideoSearch
