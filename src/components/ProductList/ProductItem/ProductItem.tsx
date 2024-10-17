import { Box, Typography } from '@mui/material';
import StarIcon from '../../../icons/StarIcon';
import { StyledButton, StyledPaper } from './ProductItemStyled';
import { ProductItemProps } from '../../../types/product';
import { useOutletContext } from 'react-router-dom';

type OutletContextType = { handleAddBadgeCount: () => void };

function ProductItem({ item }: ProductItemProps) {
	const { handleAddBadgeCount } = useOutletContext<OutletContextType>();

	const handleAddProduct = () => {
		const count = Number(sessionStorage.getItem(item.id));

		if (!count) {
			handleAddBadgeCount();
			sessionStorage.setItem(item.id, '1');
		}
	};

	return (
		<StyledPaper>
			<Box
				padding={2}
				width={300}
				height={350}
				display="flex"
				flexDirection="column"
				justifyContent="space-between"
				alignItems="center"
			>
				<Box flexGrow={1} display="flex" alignItems="center">
					<img src={item.img} />
				</Box>
				<Box width="100%" display="flex" flexDirection="column" alignItems="center" gap={2}>
					<Box width="100%" display="flex" justifyContent="space-between">
						<Typography>{item.title}</Typography>
						<Typography color="warning">{item.price + ' ₽'}</Typography>
					</Box>
					<Box width="100%" display="flex" justifyContent="space-between">
						<Box display="flex" alignItems="end" gap={1}>
							<StarIcon />
							<Typography color="textSecondary">{item.rate}</Typography>
						</Box>
						<StyledButton color="inherit" onClick={handleAddProduct}>
							<Typography>Купить</Typography>
						</StyledButton>
					</Box>
				</Box>
			</Box>
		</StyledPaper>
	);
}

export default ProductItem;
