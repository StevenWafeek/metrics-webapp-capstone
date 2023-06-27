import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import CardList from './component/cards';
import CardDetails from './component/cardDetails';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">Pokemon List</Link>
      </header>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/details/:pokemonName" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
