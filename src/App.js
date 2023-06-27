import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from './component/cards';
import CardDetails from './component/cardDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/card/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
