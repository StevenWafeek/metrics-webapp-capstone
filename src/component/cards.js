/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchCards,
  selectCards,
  selectLoading,
  selectError,
} from '../redux/cardSlice';

const CardList = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  const filteredCards = cards.filter((card) => card.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="pok-header">
      <div className="total">
        Total Objects:
        {' '}
        {filteredCards.length}
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="pok-container">
        {filteredCards.map((card) => (
          <div key={card.url}>
            <Link to={`/details/${card.name}`}>
              <button type="button">Details</button>
            </Link>
            {card.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
