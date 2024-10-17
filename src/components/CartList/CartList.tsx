import { Box, Typography } from '@mui/material';

import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { headphones, wirelessHeadphones } from '../../services/products';
import DeleteIcon from '../../icons/DeleteIcon';
import { StyledButton, StyledPaper } from './CartListStyled';
import ProductCounter from '../ProductCounter';

type OutletContextType = { handleSubtractBadgeCount: (count?: number) => void };

type CartListItemType = {
	id: string;
	img: string;
	title: string;
	price: number;
	rate: number;
};

type CartListProps = {
	items: number[];
	setItems: React.Dispatch<React.SetStateAction<number[]>>;
};

function CartList({ items, setItems }: CartListProps) {
	const { handleSubtractBadgeCount } = useOutletContext<OutletContextType>();

	const cartList = useMemo(() => {
		const cartId = Object.keys(sessionStorage).filter((key) => key !== 'badge-all-count');
		const list = cartId.map((id) => {
			return (
				headphones.find((item) => item.id === id) ||
				wirelessHeadphones.find((item) => item.id === id)
			);
		});
		return list;
	}, [items]);

	const handleDeleteProduct = (item: CartListItemType) => {
		handleSubtractBadgeCount();

		setItems((prevState) => {
			const tempArr = prevState.slice();
			tempArr[Number(item.id) - 1] = 0;
			return tempArr;
		});

		sessionStorage.removeItem(item.id);
	};

	return (
		<Box display="flex" flexDirection="column" gap={3}>
			{cartList.map((item) => (
				<StyledPaper>
					<Box padding={2} width={600} display="flex" gap={5}>
						<Box display="flex" flexDirection="column" gap={2}>
							<img src={item?.img} width="145px" />
							<ProductCounter id={item?.id || ''} items={items} setItems={setItems} />
						</Box>
						<Box display="flex" flexDirection="column" justifyContent="center">
							<Typography>{item?.title}</Typography>
							<Typography>{item?.price + ' ₽'}</Typography>
						</Box>
						<Box position="relative" flexGrow={1}>
							<StyledButton color="error" onClick={() => item && handleDeleteProduct(item)}>
								<DeleteIcon />
							</StyledButton>
						</Box>
					</Box>
				</StyledPaper>
			))}
		</Box>
	);
}

export default CartList;
