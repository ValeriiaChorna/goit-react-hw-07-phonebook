import React from 'react';
export const themeConfig = {
  light: {
    fontColor: 'black',
    bodybg: 'white',
  },
  dark: {
    fontColor: 'white',
    bodybg: 'black',
  },
};
const ThemeContext = React.createContext(themeConfig.light);
export default ThemeContext;
