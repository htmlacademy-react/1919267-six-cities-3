import { render, screen } from '@testing-library/react';
import FavoritesEmptyBlock from './favorites-empty-block';

describe('Component: FavoritesEmptyBlock', () => {
  it('renders correctly', () => {
    const expectedText = /Nothing yet saved/i;

    render(<FavoritesEmptyBlock />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
