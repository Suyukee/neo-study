import { IconButton, styled } from '@mui/material';
import VkIcon from '../../icons/VkIcon';
import TgIcon from '../../icons/TgIcon';
import WaIcon from '../../icons/WaIcon';

const StyledContactsList = styled('ul')`
	display: flex;
	gap: 20px;
`;

function SocialNetworks() {
	return (
		<StyledContactsList>
			<IconButton href="/vk">
				<VkIcon />
			</IconButton>
			<IconButton href="/tg">
				<TgIcon />
			</IconButton>
			<IconButton href="/wa">
				<WaIcon />
			</IconButton>
		</StyledContactsList>
	);
}

export default SocialNetworks;
