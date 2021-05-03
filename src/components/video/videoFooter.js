import React from 'react'

function VideoFooter() {
    return (
        <div>
            <div className="row">
            <div className="col-md-12">
            <div className="footer p-3 mt-4 text-center bg-dark text-light">
                Developed By:
                <span className="text-warning font-weight-normal">
                Ebo Lee
                </span>
                , Using <i className="fab fa-react" /> React JS &amp; Redux JS
                integrated with Rapid YouTube API &nbsp;
                <a
                href="https://rapidapi.com/blog/react-youtube-api/"
                target="_blank"
                rel="noopener noreferrer"
                >
                Rapid YouTube Api
                </a>
            </div>
            </div>
        </div>
        </div>
    )
}

export default VideoFooter
