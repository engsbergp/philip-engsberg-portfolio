import React from 'react'
import imageData from "../imageData.json"
import {useImages} from "../context/imageModalContext"

export default function Infrared() {

  const { getImg } = useImages();

  return(
    <>
      <div className="gallery">
        {
          imageData.infrared.map((image, index) => {
            return (
              <div key={index} className="pics" onClick={()=>getImg(image.url)}>
                <img loading="lazy" style={{width:"100%", margin:"0", padding:"0"}} src={image.url} alt={image.name}/>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
