/* eslint-disable react/no-array-index-key */
// cards.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchCards, selectCards, selectLoading, selectError,
} from '../redux/cardSlice';

const CardList = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

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

  return (
    <div>
      {cards.map((card, index) => (
        <div key={index}>
          <Link to={`/details/${card.name}`}>
            <button type="button">Details</button>
          </Link>
          {card.name}
        </div>
      ))}
    </div>
  );
};

export default CardList;
