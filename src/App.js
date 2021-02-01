import React from 'react';
import Home from './pages/Home';
import GlobalStyles from "./components/GlobalStyle";
// React Router
import { Route } from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <GlobalStyles/>
      <Route path={['/games/:id','/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
