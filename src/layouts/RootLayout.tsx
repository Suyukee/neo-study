import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useState } from 'react';

function RootLayout() {
	const [badgeAllCount, setBadgeAllCount] = useState(
		Number(sessionStorage.getItem('badge-all-count')),
	);

	const handleAddBadgeCount = (count = 1) => {
		sessionStorage.setItem('badge-all-count', `${badgeAllCount + count}`);
		setBadgeAllCount(badgeAllCount + 1);
	};

	const handleSubtractBadgeCount = (count = 1) => {
		sessionStorage.setItem('badge-all-count', `${badgeAllCount - count}`);
		setBadgeAllCount(badgeAllCount - 1);
	};

	return (
		<Box width={1110} paddingTop={1}>
			<Header badgeAllCount={badgeAllCount} />
			<Outlet context={{ handleAddBadgeCount, handleSubtractBadgeCount, badgeAllCount }} />
			<Footer />
		</Box>
	);
}

export default RootLayout;
