import React from 'react'

const Card = () => {
  return (
    <div className=" m-1 p-2 bg-white max-w-sm mx-auto  rounded-lg shadow-sm  items-center space-x-4">
    <div className="shrink-0">
      <img className="h-30 w-100"
       src="https://media.istockphoto.com/id/509091116/photo/spaceship-in-space.jpg?s=612x612&w=0&k=20&c=pew4w7A9sNMLIRt3x3_Mp13fcqiqd4VtIFHthcd3MwU=" alt=""/>
    </div>
    <div>
      <div className="text-xl font-medium text-black">Capsule</div>
      <p className="text-slate-500"> This is x type of capsule</p>
    </div>
  </div>
  )
}

export default Card
