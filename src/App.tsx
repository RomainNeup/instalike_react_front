import i18next from 'i18next';
import React, { ReactElement, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './router/routes';
import Middleware from './router/middlewares/Middleware';
import NotFoundView from './views/utils/NotFoundView';
import LoadingView from './views/utils/LoadingView';
import './translations/i18n';
import Layout from './components/layout/Layout';
import API from './api/api';

export default function App(): ReactElement {
  const [route] = useState<AppRoute[]>(routes());
  useEffect(() => {
    API.get('translations')
      .then((res) => {
        i18next.addResourceBundle('en', 'backend', res.data.en, true, true);
        i18next.addResourceBundle('fr', 'backend', res.data.fr, true, true);
      });
  });

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
