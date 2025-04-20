import { render, screen } from '@testing-library/react';
import { withStore } from '../../mock-components/with-store';
import FavoritesListBlock from './favorites-list-block';
import { groupOffersByLocation } from '../../utils/offer';

describe('Component: FavoritesListBlock', () => {
  it('renders correct city name', () => {
    const expectedText = /Saved listing/i;

    const { withStoreComponent } = withStore(
      <FavoritesListBlock favoritesByLocation={groupOffersByLocation([])} />
    );

    render(withStoreComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
