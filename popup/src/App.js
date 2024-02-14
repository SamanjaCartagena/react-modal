import React,{useState} from "react";
import Modal from './Modal'
const App = () => {
  const [openModal, setOpenModal]= useState(false)
  return <div>
    <button onClick={()=> setOpenModal(true)}>Modal</button>
    <Modal open={openModal}/>
  </div>;
};

export default App;
