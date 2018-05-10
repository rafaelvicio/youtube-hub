import React from 'react';

const VideoListItem = ({ video }) => {

    const imgUrl = video.snippet.thumbnails.default.url

    return (
        <li className="list-group-item">
            <div className="media">
                <img className="mr-3" src="{imgUrl}"></img>
                <div className="media-body">
                    <h5 className="mt-0">{video.snippet.title}</h5>
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;