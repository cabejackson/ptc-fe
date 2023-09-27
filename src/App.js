import './App.css';
// import axios from "axios";
// import Cards from "./components/Cards/cards"
// import { useEffect, useState } from 'react';
// import {jsx as _jsx} from 'react/jsx-runtime';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar';
import PersistLogin from './components/Sessions/PersistLogin';
import PrivateRoute from './components/Routes/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';

// const API_URL = "http://localhost:3000/api/v1/cards";

// function getAPIData() {
//   return axios.get(API_URL).then((response) => response.data)
// }


function App() {
  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   let mounted = true;
  //   getAPIData().then((items) => {
  //     if(mounted){
  //       setCards(items);
  //     }
  //   })
  // return () => { (mounted = false) }
  // }, []);

  return (
    <div className="App">
      <Router>

      {/* <h1>hello world</h1> */}
      <header className='App-header'>
        <AppBar />
      </header>
      {/* <Cards cards={cards}/> */}
      <main>
        <Routes>
          <Route element={ <PersistLogin />}>
            <Route path="/" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
          </Route>
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
