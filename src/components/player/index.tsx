import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Container, Overlay, Details, Title, Video, Back } from './styles/player';
import ReactPlayer from 'react-player';
import { ShowOverview, ComponentProp } from '../../constants/types';

type VideoProp = {
	playerRef: React.RefObject<ReactPlayer>;
	playingDetails: ShowOverview;
	setIsPaused: boolean;
	[x: string]: any;
};

function Player({ children, ...restProps }: ComponentProp) {
	return <Container {...restProps}>{children}</Container>;
}

Player.Back = function PlayerBack({ ...restProps }) {
	return (
		<Back {...restProps}>
			<ArrowBackIcon />
		</Back>
	);
};

Player.Overlay = function PlayerOverlay({ ...restProps }) {
	return <Overlay {...restProps} />;
};

Player.Details = function PlayerDetails({ children, ...restProps }: ComponentProp) {
	return <Details {...restProps}>{children}</Details>;
};

Player.Title = function PlayerTitle({ children, ...restProps }: ComponentProp) {
	return <Title {...restProps}>{children}</Title>;
};

Player.Video = function PlayerVideo(
	{ playingDetails, setIsPaused, ...restProps }: VideoProp) 
{
	return (
		<Video {...restProps}>
			<ReactPlayer
				url={`https://www.youtube.com/watch?v=${playingDetails.url}`}
				className="playing-video"
				width="100%"
				height="100%"
				playing
				controls
				config={{ file: { attributes: { disablePictureInPicture: true } } }}
				onPause={() => setIsPaused(true)}
				onPlay={() => setIsPaused(false)}
			/>
		</Video>
	);
};

export default Player;
