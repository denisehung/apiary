import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Hero from './hero/Hero.js';
import Header from './header/Header.js';
import Lead from './lead/Lead.js';
import DummyPage from './dummy-page/DummyPage.js';
import ChooseUs from './choose-us/ChooseUs';

function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Lead />
      <Route path="/dummy-page">
        <DummyPage />
      </Route>
      <ChooseUs/>
    </div>
  )
}

export default App;