import { Grid2, styled, Typography } from '@mui/material';
import ContactsList from '../ContactsList';
import LanguageList from '../LanguageList';
import { Link } from 'react-router-dom';
import SocialNetworks from '../SocialNetworks';

const StyledFooterWrapper = styled('div')`
	padding: 20px;
	border-radius: 20px 20px 0 0;
	background: #fff;
`;

function Footer() {
	return (
		<StyledFooterWrapper>
			<Grid2 container component="footer">
				<Grid2 size={3}>
					<Link to="/shop">
						<Typography variant="h2">QPICK</Typography>
					</Link>
				</Grid2>
				<Grid2 size={3}>
					<ContactsList />
				</Grid2>
				<Grid2 size={3}>
					<LanguageList />
				</Grid2>
				<Grid2 size={3} display="flex" justifyContent="right">
					<SocialNetworks />
				</Grid2>
			</Grid2>
		</StyledFooterWrapper>
	);
}

export default Footer;
