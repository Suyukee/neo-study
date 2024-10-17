import { useState } from 'react';
import { Box, IconButton, Link, styled, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GlobalIcon from '../../icons/GlobalIcon';

const StyledLanguageList = styled('ul')`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function LanguageList() {
	const [language, setLanguage] = useState<string | null>('rus');
	return (
		<StyledLanguageList>
			<Link to="/conditions" color="inherit" underline="hover" component={RouterLink}>
				<Typography component="li">Условия сервиса</Typography>
			</Link>
			<Box display="flex">
				<IconButton onClick={() => setLanguage('')}>
					<GlobalIcon />
				</IconButton>
				<IconButton
					color={language === 'rus' ? 'warning' : 'inherit'}
					onClick={() => setLanguage('rus')}
				>
					<Typography component="li">Рус</Typography>
				</IconButton>
				<IconButton
					color={language === 'eng' ? 'warning' : 'inherit'}
					onClick={() => setLanguage('eng')}
				>
					<Typography component="li">Eng</Typography>
				</IconButton>
			</Box>
		</StyledLanguageList>
	);
}

export default LanguageList;
