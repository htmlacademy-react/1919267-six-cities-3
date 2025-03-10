import { Dispatch, SetStateAction } from 'react';
import { CITIES, CityName } from '../../const';
import { City } from '../../types/city';
import cn from 'classnames';

type TabsProps = {
  currentCity: City;
  onTabClick: Dispatch<SetStateAction<City>>;
};

function Tabs({ currentCity, onTabClick }: TabsProps) {
  const cities = CITIES.map((city) => city.name);

  const handleTabClick = (city: keyof typeof CityName) => {
    const selectedCity = CITIES.find((item) => item.name === city);
    if (!selectedCity) {
      return;
    }
    onTabClick(selectedCity);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((item) => (
            <li
              key={item}
              className="locations__item"
              onClick={() => handleTabClick(item)}
            >
              <a
                className={cn('locations__item-link', 'tabs__item', {
                  'tabs__item--active': item === currentCity.name,
                })}
                href="#"
              >
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
