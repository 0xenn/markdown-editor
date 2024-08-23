import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const Preview = ({ html }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [html]);

  return (
    <div className="preview">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Preview;
