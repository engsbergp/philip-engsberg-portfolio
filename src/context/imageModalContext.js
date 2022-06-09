import React, { useContext, useState } from "react";

const ImageContext = React.createContext();
const ModalContext = React.createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function useImages() {
  return useContext(ImageContext);
}

export default function ImageModalProvider({children}) {

const [ modalIsActive, setModalIsActive ] = useState(false);
const [ activeImageUrl, setActiveImageUrl ] = useState('');

const getImg = (url) => {
  setActiveImageUrl(url);
  setModalIsActive(!modalIsActive)
}

  return (
    <ModalContext.Provider
      value={{modalIsActive, setModalIsActive}}>
      <ImageContext.Provider 
        value={{activeImageUrl, setActiveImageUrl, getImg}}>
        {children}
      </ImageContext.Provider>
    </ModalContext.Provider>
  )
}
