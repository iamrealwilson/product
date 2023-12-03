export const IMAGE_BASE_URL = 'https://express-tmdb-api.onrender.com/images/';
export const IMAGE_SIZES = {
	backdrop: {
		small: 'w300',
		xmedium: 'w780',
		medium: 'w1280',
		large: 'original'
	},
	poster: {
		small: 'w154',
		medium: 'w185',
		large: 'w342'
	},
	still: {
		small: 'w92'
	}
};

export const BACKDROP_PLACEHOLDER = 'https://plchldr.co/i/300x169?&bg=333333&fc=ffffff&text=Legal Lex';
export const POSTER_PLACEHOLDER = 'https://plchldr.co/i/342x513?&bg=333333&fc=ffffff&text=Legal Lex';
export const STILL_PLACEHOLDER = 'https://plchldr.co/i/185x104?&bg=333333&fc=ffffff&text=Legal Lex';

export const HEADER_LINKS = [
	{
		title: 'Review',
		value: 'series'
	}
];

export const FAQS = [
	
];

export const FEATURES = [
	{
		id: 1,
		title: 'Enjoy on your TV.',
		description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
		video: '',
		image: '/images/misc/Home-TV.jpg',
		alt: 'Roseflix on TV'
	},
	{
		id: 2,
		title: 'Download your shows to watch offline.',
		description: 'Save your favorites easily and always have something to watch.',
		video: '',
		image: '/images/misc/Home-Mobile.jpg',
		alt: 'Roseflix on mobile',
		direction: 'row-reverse'
	},
	{
		id: 3,
		title: 'Watch everywhere.',
		description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV without paying more.',
		image: '/images/misc/Home-IMac.jpg',
		alt: 'Roseflix on different devices'
	}
];

export const FOOTER_LINKS = [

];
