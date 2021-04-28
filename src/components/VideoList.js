import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({videoList}) => {
    console.log(videoList)
    if (videoList) {
         videoList.map(video => {
            return <VideoCard key={video.id} video={video} />
        })
    }
    return <div></div>
}

        // this.props.videoList.map((video) => {
        //     console.log(video)
        //     return (
        //         <div className="video-card" key={video.id}>
        //             < VideoCard 
        //                 title={video.title}
        //                 link={video.link}
        //                 description={video.description}
        //                 authorRef={video.author.ref}
        //                 authorName={video.author.name}
        //                 views={video.views}
        //                 duration={video.duration}
        //                 uploaded={video.uploaded_at}
        //                 img={video.thumbnail}
        //             />
        //         </div>
        //     )
        // })

//     }


// }

export default VideoList;