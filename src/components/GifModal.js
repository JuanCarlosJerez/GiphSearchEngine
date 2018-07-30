import React from 'react';
import Modal from 'react-modal';


const GifModal = (props) => {
  if (!props.selectedGif) {
    return <div></div>;
  }
  return (

//If modal is open activate modalIsOpen and add feature for modal to close
//Create button that enables closing of modal and takes you back to main screen
    <Modal
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }>
      <div className="gif-modal">
        <img src={ props.selectedGif.images.original.url } />
        <p><strong>Source:</strong> <a href={ props.selectedGif.source }>{ props.selectedGif.source }</a></p>


        <button id="closeButton" onClick={() => props.onRequestClose()}>back to gifs</button>
      </div>
    </Modal>
  );
};

export default GifModal;
