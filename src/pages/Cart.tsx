import { Box, Typography } from '@mui/material';
import TotalAmount from '../components/TotalAmount';
import CartList from '../components/CartList';
import { useState } from 'react';

function Cart() {
	const [items, setItems] = useState([
		Number(sessionStorage.getItem('1')),
		Number(sessionStorage.getItem('2')),
		Number(sessionStorage.getItem('3')),
		Number(sessionStorage.getItem('4')),
		Number(sessionStorage.getItem('5')),
		Number(sessionStorage.getItem('6')),
		Number(sessionStorage.getItem('7')),
		Number(sessionStorage.getItem('8')),
		Number(sessionStorage.getItem('9')),
	]);

	return (
		<Box
			padding={4}
			minHeight="calc(100vh - 230px)"
			display="flex"
			flexDirection="column"
			gap={2}
			component="main"
		>
			<Typography variant="subtitle1" color="textSecondary">
				Корзина
			</Typography>
			<Box display="flex" justifyContent="space-between">
				<CartList items={items} setItems={setItems} />
				<TotalAmount items={items} />
			</Box>
		</Box>
	);
}

export default Cart;
