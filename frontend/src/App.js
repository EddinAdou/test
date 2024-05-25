import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('test')
    console.log('test')
  }, []);
  return (
      <div className="App">
        <div className="alert alert-secondary" role="alert">
          A simple secondary alert—check it out!
        </div>
      </div>
  );
}

export default App;
