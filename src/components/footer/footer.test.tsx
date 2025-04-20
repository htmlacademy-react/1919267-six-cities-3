import { render, screen } from '@testing-library/react';
import Footer from './footer';
import { withStore } from '../../mock-components/with-store';
import { BrowserRouter } from 'react-router-dom';

describe('Component: Footer', () => {
  it('renders correctly', () => {
    const { withStoreComponent } = withStore(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    render(withStoreComponent);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
