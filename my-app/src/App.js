import logo from './logo.svg';
import './App.css';
import FunctionalGreating from './components/FunctionalGreating';
import FunctionalGreatingWithProps from './components/FunctionalGreatingWithProps';
import StatefulGreeting from './components/StatfulGreeting';
// import StatefulGreeting from './components/StatefulGreetingWithCallBack';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreating /> */}
      <StatefulGreeting  greeting="I'm a stateful class component!"/>
      {/* <FunctionalGreatingWithProps greeting="nice to meet you!" name="Chris" age="34" /> */}
    </div>
  );
}

export default App;
