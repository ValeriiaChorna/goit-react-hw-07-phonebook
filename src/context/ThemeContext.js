import React, { Component, createContext } from 'react';
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

const Context = createContext(themeConfig.light);

class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === 'dark' ? 'light' : 'dark',
    });
  };

  state = {
    theme: 'light',
    toggleTheme: this.toggleTheme,
  };

  render() {
    const { children } = this.props;
    return (
      <Context.Provider
        value={{
          ...this.state,
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}
export default ThemeContext;
