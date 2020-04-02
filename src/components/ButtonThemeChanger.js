import React from 'react';
import withTheme from '../hoc/withTheme';
import T from 'prop-types';

const Button = ({ theme }) => (
  <button
    className={theme.theme === 'dark' ? 'btn-dark' : 'btn-light'}
    type="button"
    onClick={theme.toggleTheme}
  >
    {theme.theme}
  </button>
);

Button.prototype = {
  label: T.string.isRequired,
  theme: T.string.isRequired,
  toggleTheme: T.func.isRequired,
};

export default withTheme(Button);
