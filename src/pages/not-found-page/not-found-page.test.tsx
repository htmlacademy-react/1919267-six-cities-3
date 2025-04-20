import { withStore } from '../../mock-components/with-store';
import NotFoundPage from './not-found-page';
import { render, screen } from '@testing-library/react';
import { withRouterAndHelmet } from '../../mock-components/with-router';

describe('Component: NotFoundPage', () => {
  it('should render correctly if offer is not found', () => {
    const expectedState = /The offer with such ID is not found/i;
    const { withStoreComponent } = withStore(<NotFoundPage type="offer" />);

    const { withRouterComponent } = withRouterAndHelmet(withStoreComponent);
    render(withRouterComponent);

    expect(screen.getByText(expectedState)).toBeInTheDocument();
  });
});
