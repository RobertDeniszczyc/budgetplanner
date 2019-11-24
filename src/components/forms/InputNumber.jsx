import React from 'react';

export default function InputNumber(props) {
  return (
    <div className="container--input-number">
      <label className="outgoing-input__label" htmlFor={props.name}>{props.label}</label>
      <input
        type="number"
        value={props.value}
        onChange={props.onChange}
        className="outgoing-input__field"
      />
    </div>
  )
}
