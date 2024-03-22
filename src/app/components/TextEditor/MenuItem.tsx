
import React from 'react'

import './MenuItem.scss';

export const MenuBarItem = ({
  icon, title, action, isActive = null,
}: any) => (
  <button
    className={`menu-item${isActive && isActive() ? ' is-active' : ''}`}
    onClick={action}
    title={title}
  >
    < i className={`ri-${icon}`}></i>
  </button>
);
