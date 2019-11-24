import React from 'react';

export default function Heading(props) {
  return (
    <div className="application__heading--container">
      <h1 className="application__heading">{props.heading}</h1>
    </div>
  )
}
