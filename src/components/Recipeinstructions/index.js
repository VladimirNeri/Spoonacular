import React from 'react';

const Recipeinstructions = (props) => {
  return (
    <div className='recipe-instructions'>
      <div key={props.key}>
        Step {props.step}
        <br></br>
        <br></br>
        {props.instruction}
      </div>
      <br></br>
    </div>
  );
};

export default Recipeinstructions;
