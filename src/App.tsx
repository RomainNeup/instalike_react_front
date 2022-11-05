import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import routes from './router/routes';
import Body from './components/layout/Body';
import Middleware from './router/middlewares/Middleware';

function App(): JSX.Element {
  const [route] = useState<AppRoute[]>(routes());

  return (
    <div className="App">
      <Body>
        <Routes>
          {route.map(((r: AppRoute) => (
            <Route
              path={r.path}
              element={(
                <Middleware loginRequired={r.loginRequired} logoutRequired={r.logoutRequired}>
                  {r.element()}
                </Middleware>
              )}
              key={r.path}
            />
          )))}
        </Routes>
      </Body>
    </div>
  );
}

export default App;
