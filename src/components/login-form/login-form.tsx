import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/api-actions';
import styles from './login-form.module.css';

type LoginFormInputs = {
  email: string;
  password: string;
};

function LoginForm() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm<LoginFormInputs>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (
    data: LoginFormInputs,
    event?: React.BaseSyntheticEvent
  ) => {
    event?.preventDefault();
    dispatch(login(data));
  };
  return (
    <section className="login">
      <h1 className="login__title" data-testid="login-title">
        Sign in
      </h1>
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
            autoComplete="current-password"
            {...register('password', {
              required: true,
              pattern: /^(?=.*[0-9])(?=.*[a-zA-Z]).{2,}$/i,
            })}
          />
          {errors.password && (
            <p className={styles.errorMessage}>
              The password must have at least one letter and one digit
            </p>
          )}
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
  );
}

export default LoginForm;
