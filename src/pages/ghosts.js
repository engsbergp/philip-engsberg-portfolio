import React from 'react'
import imageData from "../imageData.json"
import ReactPlayer from "react-player"
// import {useImages} from "../context/imageModalContext"


export default function ghosts() {

  // const { getImg } = useImages();

  return (
    <div className="player">
    {
      imageData.ghosts.map((item, index) => {
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
