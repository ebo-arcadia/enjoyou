import React from 'react';
import '../../style/video.css'

const VideoCard = ({video}) => {
    console.log(video)
    return (
        <>
            <div className="video-card" key={video.id}>
                <br></br>
                <div>
                    <h1><a href={video.link} target="_blank" rel="noreferrer">{video.title}</a></h1>
                    <p>Description: {video.description}</p>
                </div>
                <ul className="meta">
                    <li>By: <a href={video.author.ref} target="_blank" rel="noreferrer">{video.author.name}</a></li>
                    <li>Views: {video.views}</li>
                    <li>Duration: {video.duration}</li>
                    <li>Uploaded: {video.uploaded_at}</li>
                </ul>
                <img alt="" src={video.thumbnail} />
            </div>
        </>
    )
}

export default VideoCard;

