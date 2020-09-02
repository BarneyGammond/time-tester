import React, { useRef, useEffect } from 'react'

export default ({id, videoLink, onVideoEnd, showRef}) => {
    
    const videoRef = useRef(null);

    useEffect(() => {
        showRef(videoRef, id)
        // eslint-disable-next-line
    }, [])

    return (
        <div className="video-container">
            <video 
                onEnded={onVideoEnd}
                className="hidden"
                ref={videoRef}
                key={videoLink}
                controls preload="auto">

                <source src={`videos/${videoLink}`} type="video/mp4"/>

            </video>
        </div>
    )

}
 