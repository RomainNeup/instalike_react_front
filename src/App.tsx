import React, { ReactElement, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './router/routes';
import Middleware from './router/middlewares/Middleware';
import NotFoundView from './views/utils/NotFoundView';
import LoadingView from './views/utils/LoadingView';
import './translations/i18n';
import Layout from './components/layout/Layout';

export default function App(): ReactElement {
  const [route] = useState<AppRoute[]>(routes());

  return (
    <div className="App">
      <Layout>
        <Routes>
          {route.map((({
            path, loginRequired, logoutRequired, Element,
          }: AppRoute) => (
            <Route
              path={path}
              element={(
                <Middleware loginRequired={loginRequired} logoutRequired={logoutRequired}>
                  <Element />
                </Middleware>
              )}
              key={path}
            />
          )))}
          <Route path="loading" element={<LoadingView />} />
          <Route path="*" element={<NotFoundView pageName="" />} />
        </Routes>
      </Layout>
    </div>
  );
}
