import { render, screen } from '@testing-library/react';
import SortingForm from './sorting-form';
import { Sorting } from '../../const';

describe('Component: SortingForm', () => {
  it('renders', () => {
    render(
      <SortingForm
        activeSorting={Sorting.LowToHigh}
        onSortingOptionClick={() => {}}
      />
    );

    expect(screen.getByTestId('active-sorting')).toHaveTextContent(
      'Price: low to high'
    );
  });
});
