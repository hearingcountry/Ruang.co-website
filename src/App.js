import React from 'react';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Homepage/Home';
import Browse from './pages/Browse/BrowsePage';

import TopNavbar from './components/TopNavbar';
import BottomFooter from './components/BottomFooter';

import SignIn from './pages/SignIn/Login';
import Register from './pages/SignUp/Register';
import NotFoundPage from './NotFound';

import LowokwaruList from './pages/Browse/CityList/Lowokwaru';
import KlojenList from './pages/Browse/CityList/Klojen';
import SukunList from './pages/Browse/CityList/Sukun';

function App() {
  return (
    <>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/browse" element={<Browse />} />

        <Route path="/browse/lowokwaru-list" element={<LowokwaruList />} />
        <Route path="/browse/klojen-list" element={<KlojenList />} />
        <Route path="/browse/sukun-list" element={<SukunList />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <BottomFooter />
    </>
  );
}

export default App;