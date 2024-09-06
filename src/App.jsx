import React from 'react';
import FileToFileText from './components/fileToFileText/FileToFileText';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>File Converter</h1>
      <FileToFileText inputFileType="application/vnd.openxmlformats-officedocument.wordprocessingml.document" outputFileType="html" />
    </div>
  );
}

export default App;
