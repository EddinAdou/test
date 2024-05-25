import './App.scss';
import { useEffect } from 'react';
import axios from "axios";

function App() {
    const request = async ()=>{
        try {
            const response = await axios.get('http://backend:9000/api/products');
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
  useEffect(() => {
      request()
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
