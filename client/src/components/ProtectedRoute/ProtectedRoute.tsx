import React, { useContext } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { AppContext } from '../../Context/Context';

interface IProps {
  component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
}

const ProtectedRoute: React.FC<IProps> = ({
  component: Component,
  path,
  exact = false
}: IProps) => {
  const { user } = useContext(AppContext);
  console.log('user', user);
  return (
    <Route
      path={path}
      exact={exact}
      render={(props: RouteComponentProps) =>
        user ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};

export default ProtectedRoute;
