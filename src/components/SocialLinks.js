import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faTree } from '@fortawesome/free-solid-svg-icons'

export default function SocialLinks() {
  return (
    <div className="footer gap-3">
      <FontAwesomeIcon className="pointer socialLink" onClick={() => window.open("https://instagram.com/phil_engsberg","_blank")} icon={faInstagram} />
      <FontAwesomeIcon className="pointer socialLink" onClick={() => window.open("https://twitter.com/philengsberg","_blank")} icon={faTwitter} />
      <FontAwesomeIcon className="pointer socialLink" onClick={() => window.open('mailto:philengsberg@gmail.com','_blank')} icon={faEnvelope} />
      <FontAwesomeIcon className="pointer socialLink" onClick={() => window.open("https://ambl.io","_blank")} icon={faTree} />
    </div>
  )
}
