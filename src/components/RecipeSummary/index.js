import React from 'react'

const Recipesummary = ({ summary }) => {
   // add line breaks to rendered string
   const tagHtml = (summary) => {
    let string = summary.replace(/(?:\r\n|\r|\n)/g, '<br>');
    return string;
  };

  const renderData = () => {
    return <div dangerouslySetInnerHTML={{ __html: tagHtml(summary) }}/>
  };
  
  return <div className='recipe-summary'>{renderData()}</div>;

}

export default Recipesummary
