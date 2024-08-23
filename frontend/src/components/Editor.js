

import React from 'react';

const Editor = ({ markdown, setMarkdown }) => {
  return (
    <textarea
      className="editor"
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
      placeholder="Type Markdown here..."
    />
  );
};

export default Editor;
