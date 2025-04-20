import { render, screen } from '@testing-library/react';
import NearOffers from './near-offers';

describe('Component: NearOffers', () => {
  it('renders correctly', () => {
    const expectedText = /Other places in the neighborhood/i;

    render(<NearOffers nearbyPlaces={[]} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
