import React from 'react';
// Components and Page
import Home from './pages/Home';
import Header from "./components/header/Header";
// Styling
import GlobalStyles from "./components/GlobalStyle";
// React Router
import { Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <Route path={['/games/:id','/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
