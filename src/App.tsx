import React, { useState } from 'react';
import './App.css';
import routes from './router/routes';
import { Route, Routes } from 'react-router-dom';
import { Body } from './components/layout/Body';

function App(): JSX.Element {
  const [route] = useState<AppRoute[]>(routes());

  return (
    <div className="App">
      <Body>
        <Routes>
          {route.map(((route: AppRoute, index: number) => (
            <Route path={route.path} element={route.element()} key={index} />
          )))}
        </Routes>
      </Body>
    </div>
  );
}

export default App;
