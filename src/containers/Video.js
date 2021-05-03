import React from 'react';
import VideoSearch from '../components/video/videoSearch';
import VideoHeader from '../components/video/videoHeader';
import VideoFooter from '../components/video/videoFooter';

const Video = () => {   
    return (
        <div className="video-search">
            <VideoHeader />
            <VideoSearch />
            <VideoFooter />
        </div>
    )
}
export default Video
