import React from 'react'
import imageData from "../imageData.json"
import ReactPlayer from "react-player/lazy"

export default function coffee() {
  return (
    <div className="player">
    {
      imageData.coffee.map((item, index) => {
        return(
          <div className="video" key={index}>
            <ReactPlayer 
              url={item.url}
              controls={true}
              loop={true}
              volume={.5}
              // playing={true}
              width={"100%"}
            />
          </div>
        )
      })
    }
  </div>
  )
}
