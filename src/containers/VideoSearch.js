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

    const [ searchTerm, setSearchTerm ] = useState('Most watched Today');
    const [ videoList, setVideoList ] = useState(null);

    const search = (e) => {
        e.preventDefault();
        searchYouTube(searchTerm).then(setVideoList);
    };

    // const passDataToVideoList = () => {
    //     console.log(videoList)
    //     if (videoList) {
    //         videoList.map((video) => 
    //                     <VideoList 
    //                         key={video.id}
    //                         title={video.title}
    //                         description={video.description}
    //                     />
    //         )
    //     }
    // }

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
            {/* {passDataToVideoList()} */}
            {videoList &&
        (videoList.length === 0
          ? <p>No results</p>
          : (
            <ul className="items">
              {videoList.map(item => (
                <li className="item" key={item.id}>
                  <div>
                    <b><a href={item.link}>{item.title}</a></b>
                    <p>{item.description}</p>
                  </div>
                  <ul className="meta">
                    <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
                    <li>Views: {item.views}</li>
                    <li>Duration: {item.duration}</li>
                    <li>Uploaded: {item.uploaded_at}</li>
                  </ul>
                  <img alt="" src={item.thumbnail} />
                </li>
              ))}
            </ul>
          )
        )
      }
        </div>
    );
}
export default VideoSearch
