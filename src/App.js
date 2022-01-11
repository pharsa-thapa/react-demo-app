import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Routes from './routes';
import { Notification } from './common';
import { setCurrentTab, toggleDarKMode } from './store/siteCoordinator/siteCoordinator.actions';

const lightTheme = createTheme({
  palette: {
    type: 'light',
    background: {
      default: 'rgb(237 237 237)',
      paper: 'rgb(255 255 255)'
    },
    primary: {
      main: 'rgb(29, 155, 240)',
      contrastText: 'rgb(255 255 255)',
      A100: 'rgba(0, 0, 0, 0.04)',
      A200: 'rgb(255 255 255)',
      A400: 'rgb(119 119 119)'
    },
    secondary: {
      main: '#8338EC',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    }
  },
  typography: {
    button: {
      textTransform: 'capitalize'
    }
  }
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: 'rgb(48 48 48)',
      paper: 'rgb(66 66 66)'
    },
    primary: {
      main: 'rgb(29, 155, 240)',
      contrastText: 'rgb(255 255 255)',
      A100: 'rgb(0 0 0 / 8%)',
      A200: 'rgb(66 66 66)',
      A400: 'rgb(168 162 162)'
    },
    secondary: {
      main: '#8338EC',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    text: {
      primary: '#E0E0E2'
    }
  },
  typography: {
    button: {
      textTransform: 'capitalize'
    }
  }
});

function App() {
  const dispatch = useDispatch();
  const currentPath = window.location.pathname.split('/')[1];
  const { darkMode } = useSelector((state) => state.siteCoordinator);

  const checkDarkThemeFromLocalStorage = useCallback(() => {
    let darkModeFromLocalStorage = localStorage.getItem('darkMode');
    if (darkModeFromLocalStorage) {
      if (darkModeFromLocalStorage === 'true') {
        dispatch(toggleDarKMode(true));
      } else {
        dispatch(toggleDarKMode(false));
      }
    } else {
      localStorage.setItem('darkMode', 'true');
    }
  }, [dispatch]);

  useEffect(() => {
    checkDarkThemeFromLocalStorage();
    dispatch(setCurrentTab(currentPath));
  }, [currentPath, dispatch]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Routes />
      </Router>
      <Notification />
    </ThemeProvider>
  );
}

export default App;
