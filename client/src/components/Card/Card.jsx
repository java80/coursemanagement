import React from 'react';

export default function Card(props) {
  const { name, imageurl, description, category } = props;
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={imageurl} alt={name} />
      <p>{description}</p>
      <p>{category}</p>
      
    </div>
  );
}

