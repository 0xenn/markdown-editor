
// Import necessary modules
const express = require('express');
const {marked} = require('marked');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Route for converting Markdown to HTML

app.post('/convert', (req, res) => {
  console.log('Received request:', req.body);

  const { markdownText } = req.body;
  
  if (!markdownText) {
    console.log('No Markdown text provided');
    return res.status(400).json({ error: 'No Markdown text provided' });
  }

  try {
    const html = marked(markdownText);
    console.log('Converted HTML:', html);
    res.json({ html });
  } catch (error) {
    console.error('Conversion error:', error);
    res.status(500).json({ error: 'Error converting Markdown to HTML' });
  }
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
