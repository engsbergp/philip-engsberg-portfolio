import React from 'react'
import imageData from "../imageData.json"
import ReactPlayer from "react-player/youtube"

export default function ambl() {
  return (
    <div className="player">
    {
      imageData.ambl.map((item, index) => {
        return(
          <div className="video" key={index}>
            <ReactPlayer 
              url={item.url}
              controls={true}
              loop={true}
              volume={.5}
              // playing={true}
            />
          </div>
        )
      })
    }
  </div>
  )
}
