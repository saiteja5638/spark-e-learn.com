import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Creater from './components/pages/Creater';
import Services from './components/pages/Services';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  }, {
    path: '/creater',
    element: <Creater></Creater>
  },
  {
    path: '/Courses',
    element: <Courses></Courses>
  },
  {
    path: '/projects',
    element: <Services></Services>
  }
])





function App() {
  return (
    <>
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
    </>
  );
}

export default App;