import React from 'react';

const BottlePreview = ({ entry, widgetFor }) => {
  const item = {
    title: entry.getIn(['data', 'title']),
    body: widgetFor('body')
  };

  return (
    <div>
      <h2>BottlePreview</h2>
      <div>
        <div>Title: {item.title}</div>
        <div>Body: {item.body}</div>
      </div>
    </div>
  );
};

export default BottlePreview;
