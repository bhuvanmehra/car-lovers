import React from 'react';

const Card = (props) => {
  if(typeof(props.carModel) === 'undefined') return null;

  return(
    <div>
      <img className="materialboxed" alt={props.carModel.name} width="650" src={props.carModel.imageUrl} />
      <div style={{margin: '1em'}}>
        <div style={{display: 'inline-block', marginLeft: 10}}>
          <div className="model" style={{fontSize: '1.25em', fontWeight: 'bold'}}>Model - {props.carModel.name}</div>
          <div className="price">Price - ${props.carModel.price}</div>
        </div>
      </div>
  </div>
  );
};

export default Card;
