import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const getActiveStyle = ({ isActive }) => {
  return isActive ? { color: 'red' } : { color: 'black' };
};

const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink style={getActiveStyle} to="/">
          Home
        </NavLink>
        <NavLink style={getActiveStyle} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
