import { Grid2 } from '@mui/material';
import ProductItem from './ProductItem';
import { ProductListProps } from '../../types/product';

function ProductList({ products }: ProductListProps) {
	return (
		<Grid2 container spacing={2}>
			{products.map((item) => (
				<Grid2 key={item.id}>
					<ProductItem item={item} />
				</Grid2>
			))}
		</Grid2>
	);
}

export default ProductList;
