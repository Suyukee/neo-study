import { Box, Typography } from '@mui/material';
import { headphones, wirelessHeadphones } from '../../services/products';
import { useMemo } from 'react';
import { StyledButton, StyledPaper } from './TotalAmountStyled';

type TotalAmountProps = { items: number[] };

function TotalAmount({ items }: TotalAmountProps) {
	const totalAmount = useMemo(() => {
		let result = 0;

		headphones.forEach((item, index) => {
			result += items[index] * item.price;
		});

		wirelessHeadphones.forEach((item, index) => {
			result += items[index + 6] * item.price;
		});

		return result;
	}, [items]);

	return (
		<StyledPaper>
			<Box width={350} padding={2} display="flex" justifyContent="space-between">
				<Typography variant="h6">ИТОГО</Typography>
				<Typography variant="h6">{'₽ ' + totalAmount}</Typography>
			</Box>
			<StyledButton href="/pay">Перейти к оформлению</StyledButton>
		</StyledPaper>
	);
}

export default TotalAmount;
