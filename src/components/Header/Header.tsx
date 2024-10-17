import { Link } from 'react-router-dom';
import { Box, styled, Typography } from '@mui/material';
import CustomBadge from '../CustomBadge';
import Cart from '../../icons/CartIcon';
import LikeIcon from '../../icons/LikeIcon';

const StyledHeader = styled('header')`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

type HeaderProps = { badgeAllCount: number };

function Header({ badgeAllCount }: HeaderProps) {
	return (
		<StyledHeader>
			<Link to="/shop">
				<Typography variant="h2">QPICK</Typography>
			</Link>
			<Box display="flex" gap={2}>
				<Link to="/likes">
					<CustomBadge badgeCount={2}>
						<LikeIcon />
					</CustomBadge>
				</Link>
				<Link to="/cart">
					<CustomBadge badgeCount={badgeAllCount}>
						<Cart />
					</CustomBadge>
				</Link>
			</Box>
		</StyledHeader>
	);
}

export default Header;
