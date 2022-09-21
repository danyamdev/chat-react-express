import React from 'react';

import { LoginForm, RegisterForm } from 'components/index';
import { Home, Auth } from "pages/index";

export type TRoute = {
  path: string;
  element: React.ReactNode;
};

export const routes: TRoute[] = [
  {
    path: "/",
    element: <Auth children={<LoginForm />}/>,
  },
  {
    path: "/register",
    element: <Auth children={<RegisterForm />}/>,
  },
  {
    path: "/im",
    element: <Home />,
  },
];