import React from 'react';
import Modal from 'react-modal';
import './SuccessModal.css';
import { Link } from 'react-router-dom';

const SuccessModal = ({modalOpen,setModalOpen}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: ' #f1c0ab',
          borderRadius:'12px',
        },
      };
  return (
   <Modal isOpen={modalOpen} style={customStyles}>
    <div className="modal-inner">
      <label>Expense Added Successfully</label>
      <img src="https://img.freepik.com/premium-vector/people-working-invoice-laptop-illustration-concept_78434-72.jpg?w=900" 
      alt="Expense Added"
       className='added-img' />
       <Link to='/'>
         <div className='take-home-btn'>
    <i className="fi fi-rr-home"></i>
    Home
    </div>
       </Link>
    </div>
   

   </Modal>
  )
}

export default SuccessModal;
