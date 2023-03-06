import logo from './logo.svg';
import './App.css';
import FunctionalGreating from './components/FunctionalGreating';
import FunctionalGreatingWithProps from './components/FunctionalGreatingWithProps';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreating /> */}
      <FunctionalGreatingWithProps greeting="nice to meet you!" name="Chris" age="34" />
    </div>
  );
}

export default App;
