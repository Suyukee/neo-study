import { Box, IconButton, Typography } from '@mui/material';
import PlusIcon from '../../icons/PlusIcon';
import MinusIcon from '../../icons/MinusIcon';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

type ProductCounterProps = {
	id: string;
	items: number[];
	setItems: React.Dispatch<React.SetStateAction<number[]>>;
};

type OutletContextType = {
	handleSubtractBadgeCount: () => void;
};

function ProductCounter({ id, items, setItems }: ProductCounterProps) {
	const [count, setCount] = useState(Number(sessionStorage.getItem(id)));
	const { handleSubtractBadgeCount } = useOutletContext<OutletContextType>();

	useEffect(() => {
		setCount(Number(sessionStorage.getItem(id)));
	}, [items]);

	const handleAddProduct = () => {
		sessionStorage.setItem(id, `${count + 1}`);

		setItems((prevState) => {
			const tempArr = prevState.slice();
			tempArr[Number(id) - 1]++;
			return tempArr;
		});

		setCount(count + 1);
	};

	const handleDeleteProduct = () => {
		if (count > 1) {
			sessionStorage.setItem(id, `${count - 1}`);
			setCount(count - 1);
		} else {
			handleSubtractBadgeCount();
			sessionStorage.removeItem(id);
		}

		setItems((prevState) => {
			const tempArr = prevState.slice();
			tempArr[Number(id) - 1]--;
			return tempArr;
		});
	};

	return (
		<Box display="flex" alignItems="center" gap={3}>
			<IconButton color="warning" onClick={handleDeleteProduct}>
				<MinusIcon />
			</IconButton>
			<Typography variant="subtitle1">{count}</Typography>
			<IconButton color="warning" onClick={handleAddProduct}>
				<PlusIcon />
			</IconButton>
		</Box>
	);
}

export default ProductCounter;
