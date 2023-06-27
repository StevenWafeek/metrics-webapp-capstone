import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardList from './component/cards';
import CardDetails from './component/cardDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/details/:pokemonName" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
