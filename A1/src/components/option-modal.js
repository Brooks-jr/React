import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearModal}
        contentLabel='The Selected Option'
    >
        <h3>I say go with this option!</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearModal}>Close</button>
    </Modal>
);

export default OptionModal;