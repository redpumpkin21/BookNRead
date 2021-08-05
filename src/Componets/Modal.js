/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Modalbooks = (props) => {
//   const {
//     buttonLabel,
//     className
//   } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button id= 'book-modal' onClick={toggle}>
        <img  className = 'book-image'src ={props.book.cover} /> </Button>
      <Modal isOpen={modal} toggle={toggle} className= 'yay'>
        <ModalHeader className ='book-authitle' toggle={toggle}>
        <div>{props.book.title}</div> 
        <div>by: {props.book.author}</div>
        
        </ModalHeader>
        <ModalBody>
          {props.book.description}
        </ModalBody>
        </Modal>
    </div>
  );
}

export default Modalbooks;
