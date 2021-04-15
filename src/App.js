import React, { useState } from 'react';
import './App.css';
import PaginaInicial from './Components/PaginaInicial';


function App() {
  const [visible, setVisible] = useState(true);
  
  setTimeout(()  => {
    setVisible(false);
  }, 10000);

  return visible && <PaginaInicial />;
  
}


export default App;
