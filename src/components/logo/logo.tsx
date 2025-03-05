import { LogoSize } from '../../const';
import { TSize } from '../../types/size';

type LogoProps = {
  block: 'header' | 'footer';
  size: keyof TSize;
};

function Logo({ block, size }: LogoProps) {
  return (
    <a className={`${block}__logo-link ${block}__logo-link--active`}>
      <img
        className={`${block}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        {...LogoSize[size]}
      />
    </a>
  );
}

export default Logo;
