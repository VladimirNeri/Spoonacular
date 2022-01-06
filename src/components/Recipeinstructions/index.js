import React from 'react'

const Recipeinstructions = ({ instructions }) => {
   // add line breaks to rendered string
   const tagHtml = (instructions) => {
    let string = instructions.replace(/(?:\r\n|\r|\n)/g, '<br>');
    return string;
  };

  const renderData = () => {
    return <div dangerouslySetInnerHTML={{ __html: tagHtml(instructions) }}/>
  };

  return <div className='recipe-instructions'>{renderData()}</div>;
}

export default Recipeinstructions
