import { Cities } from '../../const';

type MainEmptyBlockProps = {
  cityName: keyof typeof Cities;
};

function MainEmptyBlock({ cityName }: MainEmptyBlockProps) {
  return (
    <>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in {cityName}
          </p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </>
  );
}

export default MainEmptyBlock;
