import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { RootContainer, Toolbar, Content } from './styles';

import { Actors, MovieInformation, Movies, Navbar, Profile } from './index';

const App = () => {
  return (
    <RootContainer>
      <CssBaseline />
      <Navbar />
      <Content>
        <Toolbar />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Content>
    </RootContainer>
  );
};

export default App;
