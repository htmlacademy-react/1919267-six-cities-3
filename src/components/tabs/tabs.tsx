import { AppRoute, CityMap } from '../../const';
import { useAppDispatch } from '../../hooks';

import cn from 'classnames';
import { Link } from 'react-router-dom';
import { setCurrentCity } from '../../store/offers-data/offers-data';
import { City } from '../../types/city';
import { memo } from 'react';

type TabsProps = {
  currentCity: City;
};

function Tabs({ currentCity }: TabsProps) {
  const dispatch = useAppDispatch();
  const cities = Object.values(CityMap);

  const handleTabClick = (city: City) => {
    dispatch(setCurrentCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((item) => (
            <li
              key={item.name}
              className="locations__item"
              onClick={() => handleTabClick(item)}
            >
              <Link
                className={cn('locations__item-link', 'tabs__item', {
                  'tabs__item--active': item.name === currentCity.name,
                })}
                to={AppRoute.Root}
              >
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const MemoizedTabs = memo(Tabs);
export default MemoizedTabs;
