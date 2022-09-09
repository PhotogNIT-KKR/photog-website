
import React from 'react';

import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Components
import HomePage from './Components/HomePage/HomePage';
import Gallery from './Components/Gallery/Gallery';
import NotFound from './Components/NotFound/NotFound';

const  App =() => {
  return (
      <Router>
        <Routes>
          <Route  path="/gallery" element={<Gallery />} />
          <Route  path="/" element={<HomePage />} />
          <Route exact  path="*" element={<NotFound />} ></Route>
        </Routes>
      </Router>
  );
}

export default App;
