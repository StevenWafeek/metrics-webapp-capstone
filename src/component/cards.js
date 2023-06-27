import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../redux/cardSlice';

function Cards() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const status = useSelector((state) => state.cards.status);
  const error = useSelector((state) => state.cards.error);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div>
      {Array.isArray(cards)
        && cards.map((card) => (
          <div key={card.id}>
            <h2>{card.name}</h2>
            <p>{card.desc}</p>
          </div>
        ))}
    </div>
  );
}

export default Cards;
