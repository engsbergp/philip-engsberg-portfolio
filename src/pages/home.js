import React from "react";
import imageData from "../imageData.json"
import {useImages} from "../context/imageModalContext"
import Marquee from "react-fast-marquee";

export default function Home() {

  const { getImg } = useImages();

  return (

    <div className="home-gallery">

      <div className="home-title">
        <div className="home-text">
          <h1 className="">PHILIP ENGSBERG</h1>
          <h2 className="">Art | Music | Design | Dev | Education</h2>
        </div>
      </div>

      <div>
        {/* <div className=""/> */}
        <Marquee className="marquee"
          gradient={false}
          direction={"right"}
        >
          {
            imageData.home1.map((item, index) => {
              return(
                <div key={index} className="marquee-row">
                  <img height="200px"  src={item.url}/>
                </div>
              )
            })
            
          }
        </Marquee>
      </div>

      <div>
        <Marquee className="marquee"
          gradient={false}
        >
          {
            imageData.home2.map((item, index) => {
              return(
                <div key={index} className="marquee-row">
                  <img height="200px" src={item.url}/>
                </div>
              )
            })
            
          }
        </Marquee>
      </div>

      <div>
        <Marquee className="marquee" 
          gradient={false}
          direction={"right"}
        >
          {
            imageData.home3.map((item, index) => {
              return(
                <div key={index} className="marquee-row">
                  <img height="200px" src={item.url}/>
                </div>
              )
            })
            
          }
        </Marquee>
      </div>
    </div>
  )
}
