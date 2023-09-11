import './App.css';
import axios from "axios";
import Cards from "./components/Cards/cards"
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/api/v1/cards";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}


function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if(mounted){
        setCards(items);
      }
    })
  return () => { (mounted = false) }
  }, []);

  return (
    <div className="App">
      <h1>hello world</h1>
      <Cards cards={cards}/>
    </div>
  );
}

export default App;
