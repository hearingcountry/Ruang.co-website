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

        <Route path="/browse/lowokwaru" element={<LowokwaruList />} />
        <Route path="/browse/klojen" element={<KlojenList />} />
        <Route path="/browse/sukun" element={<SukunList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomFooter />
    </>
  );
}

function NotFound() {
  return (
    <>
      <h1>Nothing to see here!</h1>
      <p>
        <Link to="/">Go back to homepage</Link>
      </p>
    </>
  );
};

export default App;