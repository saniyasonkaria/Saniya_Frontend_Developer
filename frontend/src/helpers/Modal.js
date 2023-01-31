import React from 'react'

const Modal = (props) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-75 z-50">
    <div className="relative p-6 bg-white rounded-lg">
      <h3 className="text-lg font-medium mb-4">{props.selectedData.capsule_id}</h3>
      <p className="mb-4">Serial: { props.selectedData.capsule_serial}</p>
      <p className="mb-4">Type: {props.selectedData.type}</p>
      <p className="mb-4">Status: {props.selectedData.status}</p>
      <p className="mb-4">Reuse Count: {props.selectedData.reuse_count}</p>
      <p className="mb-4">Original Launch: {new Date(props.selectedData.original_launch).toLocaleString()}</p>
      <p className="mb-4">Landings: {props.selectedData.landings}</p>
      <p className="mb-4">Missions: {props.selectedData.missions.length}</p>
      <button className="absolute top-0 right-0 p-4 text-black bg-white rounded-full" onClick={props.onClose}>X</button>
    </div>
  </div> 
  )
}

export default Modal
