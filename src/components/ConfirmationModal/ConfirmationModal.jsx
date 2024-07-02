import React from 'react'
import './ConfirmationModal.css'

function ConfirmationModal({showModal,setShowModal,message,onConfirm}) {

  if(!showModal) return null

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className="modal-header">
          <h3>Confirmation</h3>
          <button onClick={()=>setShowModal(false)} className="close-button">&times;</button>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <button onClick={()=>setShowModal(false)} className="cancel-button">Cancel</button>
          <button onClick={()=>{onConfirm(),setShowModal(false)}}  className="confirm-button">Confirm</button>
        </div>
      </div>
      
    </div>
  )
}

export default ConfirmationModal
