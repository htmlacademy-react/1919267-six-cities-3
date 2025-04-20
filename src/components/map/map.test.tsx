import { render, screen } from '@testing-library/react';
import Map from './map';
import { CityMap, RequestStatus } from '../../const';
import { makeFakeFullOffer } from '../../test-mocks/test-mocks';
import { withStore } from '../../mock-components/with-store';

describe('Component: Map', () => {
  it('renders', () => {
    const mockOffer = makeFakeFullOffer();
    const { withStoreComponent } = withStore(
      <Map city={CityMap.Paris} offers={[mockOffer]} className="" />,
      {
        OFFERS_DATA: {
          offers: [],
          activeId: undefined,
          currentCity: CityMap.Paris,
          offersFetchingStatus: RequestStatus.Idle,
        },
      }
    );

    render(withStoreComponent);
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
