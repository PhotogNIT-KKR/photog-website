
import React from 'react';
import classes from './Styles/app.module.css'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import HomePage from './Components/HomePage/HomePage';
import Gallery from './Components/Gallery/Gallery';
import About from './Components/About/About';
import Activities from './Components/Activities/Activities';
import Sponsors from './Components/Sponsors/Sponsors';
import Contacts from './Components/Contacts/Contacts';
import NotFound from './Components/NotFound/NotFound';

const  App =() => {
  return (
      <div className={classes.main_cont}>
        <Router>
        <Routes>
          <Route  path="/gallery" element={<Gallery />} />
          <Route  path="/" exact element={<HomePage />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/contacts" element={<Contacts />} />
          <Route  path="/sponsors" element={<Sponsors />} />
          <Route  path="/activities" element={<Activities />} />
          <Route exact  path="*" element={<NotFound />} ></Route>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
