import { createBrowserRouter } from 'react-router-dom';
import Shop from '../../pages/Shop';
import Cart from '../../pages/Cart';
import RootLayout from '../../layouts/RootLayout';
import Error from '../../pages/Error';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '/shop', element: <Shop />, index: true },
			{ path: '/cart', element: <Cart /> },
		],
	},
	{
		path: '*',
		element: <Error />,
	},
]);
