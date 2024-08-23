import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');
  const [darkMode, setDarkMode] = useState(false);

 // Convert Markdown to HTML via backend
 useEffect(() => {
  const convertMarkdownToHtml = async () => {
    if (markdown.trim() === '') {
      setHtml('');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/convert', { markdownText: markdown });
      setHtml(response.data.html);
    } catch (error) {
      console.error('Error converting markdown:', error);
      setHtml(''); // Clear HTML on error
    }
  };

  convertMarkdownToHtml();
}, [markdown]);


  // Toggle Dark Mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <header className="header">
        <button onClick={toggleDarkMode} className="toggle-button">
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
      <div className="container">
        <Editor markdown={markdown} setMarkdown={setMarkdown} />
        <Preview html={html} />
      </div>
    </div>
  );
};

export default App;
