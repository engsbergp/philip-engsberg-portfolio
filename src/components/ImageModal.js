import React from 'react'
import ReactDom from 'react-dom'
import { useModal, useImages } from "../context/imageModalContext"

export default function ImageModal() {

  const { modalIsActive, setModalIsActive } = useModal();
  const { activeImageUrl } = useImages();

  if (modalIsActive === false) return null; 

  return ReactDom.createPortal(
    <>
      <div className="modalOverlay" onClick={() => setModalIsActive(false)}/>
      <div className="imgModal pointer" onClick={() => setModalIsActive(false)}>
        <img width="100%" height="100%" src={activeImageUrl}/>
      </div>
    </>
    ,document.getElementById('portal')
  )
}
