import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import './index.css';
import { router } from './components/Router/Router';
import theme from './components/MaterialThemeProvider/MaterialThemeProvider';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router}></RouterProvider>
		</ThemeProvider>
	</StrictMode>,
);
