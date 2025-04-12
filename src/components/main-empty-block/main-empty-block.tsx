import { Cities } from '../../const';
import { useAppDispatch } from '../../hooks';
import { fetchOffers } from '../../store/api-actions';

type MainEmptyBlockProps = {
  cityName: keyof typeof Cities;
};

function MainEmptyBlock({ cityName }: MainEmptyBlockProps) {
  const dispatch = useAppDispatch();

  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">
          We could not find any property available at the moment in {cityName}
        </p>
      </div>
      <button
        className="locations__item-link"
        style={{
          color: '#4481c3',
          fontSize: '20px',
          fontWeight: 'bold',
          backgroundColor: 'transparent',
          border: 'none',
          marginTop: '40px',
          paddingLeft: '40px',
          fontStyle: 'oblique',
          transform: 'skew(-10deg)',
          cursor: 'pointer',
        }}
        onClick={() => {
          dispatch(fetchOffers());
        }}
      >
        Попробовать ещё раз
      </button>
    </section>
  );
}

export default MainEmptyBlock;
