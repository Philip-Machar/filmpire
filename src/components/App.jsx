import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route, } from 'react-router-dom';

import { Actors, MovieInformation, Movies, Navbar, Profile } from './index';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
