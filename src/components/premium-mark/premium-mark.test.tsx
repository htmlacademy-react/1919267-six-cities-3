import { render, screen } from '@testing-library/react';
import PremiumMark from './premium-mark';

describe('Component: PremiumMark', () => {
  it('renders', () => {
    const expectedText = /Premium/i;

    render(<PremiumMark block="offer" isPremium />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
