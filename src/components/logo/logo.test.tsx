import { render, screen } from '@testing-library/react';
import Logo from './logo';
import { withStore } from '../../mock-components/with-store';
import { BrowserRouter } from 'react-router-dom';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const expectedAltText = '6 cities logo';
    const { withStoreComponent } = withStore(
      <BrowserRouter>
        <Logo block="footer" size="small" />
      </BrowserRouter>
    );

    render(withStoreComponent);
    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });
});
