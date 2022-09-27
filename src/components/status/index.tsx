import React from 'react';
import classNames from 'classnames';

import './style.scss';

type TStatus = {
  online: any;
}

const Status: React.FC<TStatus> = ({ online }) => (
  <span className={classNames("status", { "status--online": online })}>
    {online ? "онлайн" : "офлайн"}
  </span>
);

export default Status;