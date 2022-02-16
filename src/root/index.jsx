import React from 'react';
import { Counter } from '../components/Counter';
import { Login } from '../components/Login';
import { Profile } from '../components/Profile';

export const Root = () => {
  return (
    <>
      <Profile />
      <Login />
      <Counter />
    </>
  );
};

export default Root;
