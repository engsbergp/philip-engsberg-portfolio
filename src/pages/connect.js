import React from 'react'
import phil from "../assets/phil.jpg"
import foundation from "../assets/fnd-stacked.png"
import zora from "../assets/zora-logo.png"
import opensea from "../assets/opensea-blue.png"
import rarible from "../assets/rarible-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Connect() {
  return (
    <div className="connect">
      <div className="connect-top">
        <img src={phil}/>
        <div className="connect-text">
          <p>Philip is a multi-media artist currently residing in Milwaukee, Wisconsin. He is an inspiring, up-and-coming creative voice, and has been featured across the US as a musician, composer, writer, and photographer.</p>

          <p>Recent projects have opened up his voice further, diving into the world of digital, generative art and development in the world of NFTs, blockchains, and cryptocurrency. A truly amazing landscape, funneling his wide set pf talents into this newly emerging marketplace. </p>

          <p>Please reach out via email regarding prints, commissions, or any media hype. It'd be great to hear from you! All the love</p>
        </div>
      </div>
      <div className="row">
        <div className="connect-links col-lg-6 col-sm-12">
          <FontAwesomeIcon className="pointer socialLink" onClick={() => window.open("https://instagram.com/phil_engsberg","_blank")} icon={faInstagram} />

          <FontAwesomeIcon className="pointer socialLink" onClick={() => window.open("https://twitter.com/philengsberg","_blank")} icon={faTwitter} />
          
          <FontAwesomeIcon className="pointer socialLink" onClick={() => window.open('https://www.youtube.com/channel/UCSDvF7ZWJNeE-HzNou-fQ0Q','_blank')} icon={faYoutube} />

          <FontAwesomeIcon className="pointer socialLink" onClick={() => window.open('mailto:philengsberg@gmail.com','_blank')} icon={faEnvelope} />
        </div>
        <div className="connect-links col-lg-6 col-sm-12">
          <img width="44px" style={{filter:"saturate(0)"}} className="pointer nftLinks" src={foundation} onClick={() => window.open('https://foundation.app/ambl','_blank')}/>
          <img width="45px" style={{filter:"saturate(0) brightness(.8)"}} className="pointer nftLinks" src={rarible} onClick={() => window.open('https://rarible.com/ambl','_blank')}/>
          <img width="45px" style={{filter:"saturate(0) brightness(1.5)"}} className="pointer nftLinks" src={opensea} onClick={() => window.open('https://opensea.io/ambientlandscapes','_blank')}/>
          <img width="45px" style={{filter:"saturate(0) brightness(1.4)"}} className="pointer nftLinks" src={zora} onClick={() => window.open('https://zora.co/ambl','_blank')}/>
        </div>
      </div>
    
    </div>
  )
}
