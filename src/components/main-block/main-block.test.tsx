import { render, screen } from '@testing-library/react';
import { AuthorizationStatus, CityMap, RequestStatus } from '../../const';
import { makeFakeFullOffer } from '../../test-mocks/test-mocks';
import { withStore } from '../../mock-components/with-store';
import MainBlock from './main-block';
import { BrowserRouter } from 'react-router-dom';

describe('Component: MainBlock', () => {
  it('renders', () => {
    const mockOffer = makeFakeFullOffer();
    const expectedText = /1 place to stay in Paris/i;

    const { withStoreComponent } = withStore(
      <BrowserRouter>
        <MainBlock
          currentLocation={CityMap.Paris}
          currentOffers={[mockOffer]}
        />
      </BrowserRouter>,
      {
        USER_DATA: {
          user: null,
          authorizationStatus: AuthorizationStatus.Auth,
          loginSendingStatus: RequestStatus.Success,
        },
        OFFERS_DATA: {
          offers: [],
          activeId: undefined,
          currentCity: CityMap.Paris,
          offersFetchingStatus: RequestStatus.Idle,
        },
        FAVORITES_DATA: {
          favorites: [],
          favoritesFetchingStatus: RequestStatus.Success,
        },
      }
    );

    render(withStoreComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
