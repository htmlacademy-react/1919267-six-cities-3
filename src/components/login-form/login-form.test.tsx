import { render, screen } from '@testing-library/react';
import LoginForm from './login-form';
import { withStore } from '../../mock-components/with-store';
import { BrowserRouter } from 'react-router-dom';

describe('Component: LoginForm', () => {
  it('renders', () => {
    const { withStoreComponent } = withStore(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    render(withStoreComponent);
    expect(screen.getByTestId('login-title')).toHaveTextContent('Sign in');
  });
});
