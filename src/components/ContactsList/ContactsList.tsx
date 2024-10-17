import { Link, styled, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const StyledContactsList = styled('ul')`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

function ContactsList() {
	return (
		<StyledContactsList>
			<Link to="/likes" color="inherit" underline="hover" component={RouterLink}>
				<Typography component="li">Избранное</Typography>
			</Link>
			<Link to="/cart" color="inherit" underline="hover" component={RouterLink}>
				<Typography component="li">Корзина</Typography>
			</Link>
			<Link to="/contacts" color="inherit" underline="hover" component={RouterLink}>
				<Typography component="li">Контакты</Typography>
			</Link>
		</StyledContactsList>
	);
}

export default ContactsList;
