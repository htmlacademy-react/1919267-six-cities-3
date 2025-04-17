import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../mock-components/with-router';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const expectedAltText = '6 cities logo';
    renderWithRouter(<Logo block="footer" size="small" />);

    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });
});
