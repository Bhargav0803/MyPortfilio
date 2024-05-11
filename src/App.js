import './App.css';

import Contact from './Contact';
import Details from './Details';
import Home from './Home';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Home/>
      <Details />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
