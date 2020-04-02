import React from 'react';
import './Layout.css';
import withTheme from '../../hoc/withTheme';

const Layout = ({ children, theme }) => {
  const classNameTheme = theme.theme === 'dark' ? 'dark' : 'light';
  return <div className={`Layout-${classNameTheme}`}>{children}</div>;
};

export default withTheme(Layout);
