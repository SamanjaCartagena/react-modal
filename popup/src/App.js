import React,{useState} from "react";
import Modal from './Modal'
const App = () => {
  const [openModal, setOpenModal]= useState(false)
  return <div>
    <button className="modalBtn" onClick={()=> setOpenModal(true)}>Modal</button>
    <Modal open={openModal} onClose={()=> setOpenModal(false)}/>
  </div>;
};

export default App;
