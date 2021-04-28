import React, { Component } from 'react';
import VideoCard from './VideoCard';

class VideoList extends Component {

   render(){
    let videos = this.props.videoList !== null ? this.props.videoList.map(v => <VideoCard video={v}/>) : " "
        
   
    return (
        <div> {videos} </div>
    )
   }
}

export default VideoList;