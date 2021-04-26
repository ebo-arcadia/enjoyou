import React from 'react';
import VideoList from '../components/VideoList';
import VideoSearch from './VideoSearch';

const Video = () => {   
    return (
        <div className="video-search">
            <VideoSearch />
            <VideoList />
        </div>
    )
}
export default Video
