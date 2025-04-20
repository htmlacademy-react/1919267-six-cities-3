import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

export function withRouterAndHelmet(component: JSX.Element) {
  return {
    withRouterComponent: (
      <BrowserRouter>
        <HelmetProvider>{component}</HelmetProvider>
      </BrowserRouter>
    ),
  };
}
