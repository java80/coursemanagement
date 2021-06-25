import React from "react";
export default function Card(props) {
  const { name, imageurl, description, category } = props;
  return (
    <>
      <div className="cardInner_div pt-1">
        <h5 className="text-center mt-1 mb-2 fw-bold">{name}</h5>
        <img src={imageurl} alt="" />
        <h6 className="my-3 text-center px-2">{description}</h6>
        <h5 className="text-center lastText pt-2 pb-2 text-white">
          {category}
        </h5>
      </div>
    </>
  );
}
