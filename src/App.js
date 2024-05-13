import './App.css';
import Contact from './Contact';
import { useRef } from 'react';
import { DarkModeProvider } from './DarkModeContext';
import Details from './Details';
import Home from './Home';
import Projects from './Projects';


function App() {
  const detailsRef = useRef(null);
  const contactRef = useRef(null);
  return (
  
    <DarkModeProvider>
    <div className="App">
      <Home detailsRef={detailsRef} contactRef={contactRef} />
      <Details ref={detailsRef} />
      <Projects  />
      <Contact ref={contactRef}/>
    </div>
    </DarkModeProvider>

  );
}

export default App;
