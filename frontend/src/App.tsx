import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Team from './pages/Team';

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts/:postId" element={<PostPage />} />
      </Routes>
    </>
  );
};

export default App;
