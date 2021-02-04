import React from 'react';
// Components and Page
import Home from './pages/Home';
import Nav from "./components/header/Nav";
// Styling
import GlobalStyles from "./components/GlobalStyle";
// React Router
import { Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <GlobalStyles/>
      <Nav/>
      <Route path={['/games/:id','/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
