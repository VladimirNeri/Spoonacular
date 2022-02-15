import React from 'react';

const RecipeDetails = ({ summary }) => {
  const tagHtmlSummary = (summary) => {
    let string = summary.replace(/(?:\r\n|\r|\n)/g, '<br>');
    return string;
  };

  const renderSummary = () => {
    return (
      <div dangerouslySetInnerHTML={{ __html: tagHtmlSummary(summary) }} />
    );
  };

  return <div className='recipe-child'>{summary}</div>;
};

export default RecipeDetails;
