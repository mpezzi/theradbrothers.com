import React from 'react';

const DraughtPreview = ({ entry, widgetFor }) => {
  const item = {
    title: entry.getIn(['data', 'title']),
    body: widgetFor('body')
  };

  return (
    <div>
      <h2>DraughtPreview</h2>
      <div>
        <div>Title: {item.title}</div>
        <div>Body: {item.body}</div>
      </div>
    </div>
  );
};

export default DraughtPreview;
