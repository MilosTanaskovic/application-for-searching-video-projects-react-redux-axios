import React from 'react';
// Components and Page
import Home from './pages/Home';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// Styling
import GlobalStyles from "./components/GlobalStyle";
// React Router
import { Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <GlobalStyles/>
      {/** Header Component */}
      <Header/>
      {/** Routing Home Component */}
      <Route path={['/games/:id','/']}>
        <Home />
      </Route>
      {/** Footer Component */}
      <Footer/>
    </div>
  );
}

export default App;
