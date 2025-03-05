import cn from 'classnames';
import { Sorting } from '../../const';
import { useState } from 'react';

type SortingProps = {
  activeSorting: Sorting;
  onSortingOptionClick: (type: Sorting) => void;
};

function SortingForm({ activeSorting, onSortingOptionClick }: SortingProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleTypeClick() {
    setIsOpen((prevState) => !prevState);
  }

  function handleSortingOptionClick(type: Sorting) {
    setIsOpen(false);
    onSortingOptionClick(type);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleTypeClick}
      >
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options', 'places__options--custom', {
          'places__options--opened': isOpen,
        })}
      >
        {Object.values(Sorting).map((item: Sorting) => (
          <li
            key={item}
            className={cn('places__option', {
              'places__option--active': item === activeSorting,
            })}
            tabIndex={0}
            onClick={() => handleSortingOptionClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingForm;
