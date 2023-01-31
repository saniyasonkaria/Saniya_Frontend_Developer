import React from "react";

const Card = (props) => {

  return (
    <div onClick={props.onClick} className="w-5/6 hover:w-full place-self-center m-1 p-1 bg-white hover:shadow-sm rounded-lg shadow-sm  items-center ">
      <div className="p-3">
        <span>Serial : </span>{" "}
        <span className="text-slate-500"> {props.capsule_serial}</span>
      </div>
      <div className="p-1">
        <span>Type of Capsules : </span>{" "}
        <span className="text-slate-500"> {props.type}</span>
      </div>
     <div className="p-1">
        <span>Status : </span>{" "}
        <span className="text-slate-500"> {props.status}</span>
      </div>
     
    </div>
  );
};

export default Card;
