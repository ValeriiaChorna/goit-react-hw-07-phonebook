import React from 'react';
import withTheme from '../hoc/withTheme';
import T from 'prop-types';

const Button = ({ label, theme, toggleTheme }) => (
  <button
    className={theme === 'dark' ? 'btn-dark' : 'btn-light'}
    type="button"
    onClick={toggleTheme}
  >
    {label}
  </button>
);

Button.prototype = {
  label: T.string.isRequired,
  theme: T.string.isRequired,
  toggleTheme: T.func.isRequired,
};

export default withTheme(Button);
