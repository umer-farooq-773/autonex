import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { MotionConfig } from 'framer-motion';
import { theme } from './theme';
import App from './App';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MotionConfig reducedMotion="user"><App /></MotionConfig>
  </ThemeProvider>
);
