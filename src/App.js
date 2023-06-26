import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import StockList from './component/stocklist';
import StockDetails from './component/stockDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul className="header-ul">
            <li>
              <h1 className="headerName">StockStore</h1>
            </li>
            <li>
              <Link to="/">STOCKS</Link>
            </li>
            <li>
              <Link to="/details">details</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={(
              <div>
                <StockList />
              </div>
          )}
          />
          <Route path="/details" element={<StockDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
