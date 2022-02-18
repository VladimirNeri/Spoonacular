import React from 'react';

const Recipesummary = (props) => {
  // add line breaks to rendered string
  const tagHtml = (text) => {
    let string = text.replace(/(?:\r\n|\r|\n)/g, '<br>');
    return string;
  };

  const renderData = () => {
    return <div dangerouslySetInnerHTML={{ __html: tagHtml(props.summary) }} />;
  };

  return <div className='recipe-summary'>{renderData()}</div>;
};

export default Recipesummary;
