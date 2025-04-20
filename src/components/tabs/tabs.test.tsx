import { render, screen } from '@testing-library/react';
import { Cities, CityMap, RequestStatus } from '../../const';
import { withStore } from '../../mock-components/with-store';
import Tabs from './tabs';
import { BrowserRouter } from 'react-router-dom';

describe('Component: Tabs', () => {
  it('renders correctly', () => {
    const { withStoreComponent } = withStore(
      <BrowserRouter>
        <Tabs currentCity={CityMap.Paris} />
      </BrowserRouter>,
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
    expect(screen.getByText(Cities.Paris)).toBeInTheDocument();
  });
});
