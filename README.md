# Real-Time Markdown Editor

This project is a real-time Markdown editor built using **Node.js** and **React**. The editor allows users to type Markdown syntax, which is then converted to HTML and displayed in a live preview pane.

## Features

- **Markdown Editor Interface**: A text input area where users can type Markdown syntax.
- **Live Preview**: As the user types, the Markdown is converted to HTML and displayed in real-time.
- **Backend Markdown Processing**: The conversion from Markdown to HTML is handled by a Node.js server.


## Getting Started

### Prerequisites

Ensure that you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/0xenn/markdown-editor.git
   cd markdown-editor
   ```

2. **Install dependencies::**
   ```bash
   npm install
   ```

4. **Start the Backend:**
   ```
   node index.js
   ```

5. **Start the React app:**
   ```bash
   cd markdown-editor/frontend
   npm start
   ```

### Usage
- Open your browser and navigate to http://localhost:3000.
- Start typing Markdown in the editor on the left.
- The live HTML preview will be displayed in the pane on the right.

### Technologies Used
Frontend: React
Backend: Node.js, Express
Markdown to HTML Conversion: Marked.js
HTTP Requests: Axios
Styling: CSS



