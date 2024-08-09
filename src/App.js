import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/pages/Home';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Home></Home>
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