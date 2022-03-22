import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  console.log("Component reevaluated!");
  const [showParagraph, setShowParagraph] = useState(false);

  const toogleParagraphHandler = () => {
    setShowParagraph( (previousShowParagraph) => !previousShowParagraph); 
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toogleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
