import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import CardList from './component/cards';
import CardDetails from './component/cardDetails';
import pokemonLogo from './go+play+pokecenter+pokemon+icon-1320186974176190142.png';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <img src={pokemonLogo} alt="Pokemon Logo" />
          Pokemon List
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/details/:pokemonName" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
