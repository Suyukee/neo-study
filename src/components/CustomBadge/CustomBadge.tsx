import { ReactElement } from 'react';
import { Badge, IconButton } from '@mui/material';

type CustomBadgeProps = { children: ReactElement; badgeCount: number };

function CustomBadge({ children, badgeCount }: CustomBadgeProps) {
	return (
		<IconButton aria-label="cart">
			<Badge badgeContent={badgeCount} color="warning">
				{children}
			</Badge>
		</IconButton>
	);
}

export default CustomBadge;
