import logo from './logo.svg';
import './App.css';
import ProgressBar from './ProgressBar';

function App() {
  return (
    <div className="App">
      <ProgressBar progress={90}  bgColor="violet"/>
      <ProgressBar progress={50}  bgColor="yellow"/>
      <ProgressBar progress={60}  bgColor="purple"/>
      <ProgressBar progress={40}  bgColor="red"/>
      <ProgressBar progress={70}  bgColor="blue"/>
    </div>
  );
}

export default App;
