import React, { useContext } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { UserContext } from '../stores/UserStore';

import Home from '../pages/Home';
import LoginRoutes from './LoginRoutes';

const usePrevious = (value) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

const useLocationChange = (action) => {
  const location = useLocation();
  const prevLocation = usePrevious(location);
  React.useEffect(() => {
    action(location, prevLocation);
  }, [location, action, prevLocation]);
};

export default function Router() {
  const { cleanError } = useContext(UserContext);

  useLocationChange((location, prevLocation) => {
    if (prevLocation && prevLocation.pathname !== location.pathname) {
      cleanError(null);
    }
  });

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginRoutes} />
    </Switch>
  );
}
