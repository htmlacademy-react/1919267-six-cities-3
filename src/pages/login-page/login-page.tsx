import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/api-actions';

type LoginFormInputs = {
  email: string;
  password: string;
};

function LoginPage() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<LoginFormInputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (
    data: LoginFormInputs,
    event?: React.BaseSyntheticEvent
  ) => {
    event?.preventDefault();
    dispatch(login(data));
    reset();
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities. Login page</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              method="post"
              onSubmit={(event) => void handleSubmit(onSubmit)(event)}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  placeholder="Email"
                  {...register('email', {
                    required: true,
                  })}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  placeholder="Password"
                  {...register('password', {
                    required: true,
                  })}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
