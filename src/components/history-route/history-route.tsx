import { BrowserHistory } from 'history';
import { PropsWithChildren, useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

export type HistoryRouterProps = PropsWithChildren & {
  basename?: string;
  history: BrowserHistory;
};

function HistoryRouter({ basename, children, history }: HistoryRouterProps) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

export default HistoryRouter;
