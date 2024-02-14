import React from "react";
import nft from '../src/nft.jpg'
const Modal = ({open}) => {
    if(!open)return null
  return (
  <div className="overlay">
    <div className="modalContainer">
      <img src={nft} alt=""/>
    </div>
  </div>);
};

export default Modal;
