import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProjects } from './actions/projectsAction';
 
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProjects());
  })
  return (
    <div className="App">
      <h1>Projects</h1>
    </div>
  );
}

export default App;
