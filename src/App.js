import Content from './Content';
import { useState } from 'react';


function App() {
  const [newColour, setNewColour] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newColour) return;
    setNewColour(newColour);
    setNewColour('');
  }

  return (
    <div className="App">
      <Content
       handleSubmit={handleSubmit} 
       setNewColour={setNewColour}
       newColour={newColour.toLowerCase()}
      />
    </div>
  );
}

export default App;
