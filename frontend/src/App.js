import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div>
      <ToastContainer/>
      <Header />
      <Outlet/>
    </div>
  )
}
