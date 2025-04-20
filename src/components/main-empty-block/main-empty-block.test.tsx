import { render, screen } from '@testing-library/react';
import { Cities } from '../../const';
import MainEmptyBlock from './main-empty-block';

describe('Component: MainEmptyBlock', () => {
  it('renders', () => {
    const expectedText =
      /We could not find any property available at the moment in Paris/i;

    render(<MainEmptyBlock cityName={Cities.Paris} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
