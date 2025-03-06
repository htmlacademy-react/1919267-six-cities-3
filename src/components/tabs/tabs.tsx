import { Dispatch, SetStateAction } from 'react';
import { CityMap } from '../../const';
import { TCity } from '../../types/city';
import cn from 'classnames';

type TabsProps = {
  currentCity: TCity;
  onTabClick: Dispatch<SetStateAction<TCity>>;
};

function Tabs({ currentCity, onTabClick }: TabsProps) {
  const cities = Object.values(CityMap);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((item) => (
            <li
              key={item.id}
              className="locations__item"
              onClick={() => onTabClick(item)}
            >
              <a
                className={cn('locations__item-link', 'tabs__item', {
                  'tabs__item--active': item === currentCity,
                })}
                href="#"
              >
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
