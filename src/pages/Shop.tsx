import { Box, Typography } from '@mui/material';
import { headphones, wirelessHeadphones } from '../services/products';
import ProductList from '../components/ProductList';

function Shop() {
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
				Наушники
			</Typography>
			<ProductList products={headphones} />

			<Typography variant="subtitle1" color="textSecondary">
				Беспроводные наушники
			</Typography>
			<ProductList products={wirelessHeadphones} />
		</Box>
	);
}

export default Shop;
