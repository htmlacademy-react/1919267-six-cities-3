import { render, screen } from '@testing-library/react';
import LoginForm from './login-form';
import { withStore } from '../../mock-components/with-store';
import { BrowserRouter } from 'react-router-dom';
import { AuthorizationStatus, RequestStatus } from '../../const';
import userEvent from '@testing-library/user-event';

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

  it('shourd render correctly when user enter email and password', async () => {
    const emailElementTestId = 'emailElement';
    const passwordElementTestId = 'passwordElement';
    const expectedEmailValue = 'test@test.com';
    const expectedPasswordValue = '123456a';

    const { withStoreComponent } = withStore(<LoginForm />, {
      USER_DATA: {
        user: null,
        authorizationStatus: AuthorizationStatus.NoAuth,
        loginSendingStatus: RequestStatus.Idle,
      },
    });
    render(withStoreComponent);

    await userEvent.type(
      screen.getByTestId(emailElementTestId),
      expectedEmailValue
    );
    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      expectedPasswordValue
    );

    expect(screen.getByDisplayValue(expectedEmailValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();
  });
});
