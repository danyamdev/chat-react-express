import React from 'react';

import "./style.scss";

type TAuth = {
  children: JSX.Element
}

const Auth: React.FC<TAuth>  = ({ children }) => (
  <section className="auth">
    <div className="auth__content">
      {children}
    </div>
  </section>
);

export default Auth;