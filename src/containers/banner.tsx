import React from 'react';
import { Banner } from '../components';
import SubscribeContainer from './subscribe';

function BannerContainer() {
	return (
		<Banner>
			<Banner.Title>Reviews, Lectures, Videos and more.</Banner.Title>
			<Banner.SubTitle>Watch anywhere. Watch anytime.</Banner.SubTitle>
			<SubscribeContainer />
		</Banner>
	);
}

export default BannerContainer;
