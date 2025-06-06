import { Link } from 'react-router-dom';
import { AppRoute, LogoSize } from '../../const';
import { Size } from '../../types/size';

type LogoProps = {
  block: 'header' | 'footer';
  size: keyof Size;
};

function Logo({ block = 'header', size = 'small' }: LogoProps) {
  return (
    <Link
      to={AppRoute.Root}
      className={`${block}__logo-link ${block}__logo-link--active`}
    >
      <img
        className={`${block}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        {...LogoSize[size]}
      />
    </Link>
  );
}

export default Logo;
