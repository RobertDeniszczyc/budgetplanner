import React from 'react';

export default function InputNumber(props) {
  return (
    <div className="container--input-number">
      <label for={props.name}>{props.label}</label>
      <input type="number" name={props.name} />
    </div>
  )
}
