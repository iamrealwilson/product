const API_KEY = process.env.REACT_APP_API_KEY;

export type SectionType = { title: string; endpoint: string; size?: string };
type Sections = {
	[key: string]: {
		sections: Array<SectionType>;
		helpers: { [key: string]: string };
	};
};

export const genreList = {
	"genres": [
	  {
		"id": 10759,
		"name": "Action & Adventure"
	  },
	  {
		"id": 16,
		"name": "Animation"
	  },
	  {
		"id": 35,
		"name": "Comedy"
	  },
	  {
		"id": 80,
		"name": "Crime"
	  },
	  {
		"id": 99,
		"name": "Documentary"
	  },
	  {
		"id": 18,
		"name": "Drama"
	  },
	  {
		"id": 10751,
		"name": "Family"
	  },
	  {
		"id": 10762,
		"name": "Kids"
	  },
	  {
		"id": 9648,
		"name": "Mystery"
	  },
	  {
		"id": 10763,
		"name": "News"
	  },
	  {
		"id": 10764,
		"name": "Reality"
	  },
	  {
		"id": 10765,
		"name": "Sci-Fi & Fantasy"
	  },
	  {
		"id": 10766,
		"name": "Soap"
	  },
	  {
		"id": 10767,
		"name": "Talk"
	  },
	  {
		"id": 10768,
		"name": "War & Politics"
	  },
	  {
		"id": 37,
		"name": "Western"
	  }
	]
	};

export const genreMovieList = 
{
	"genres": [
    {
      "id": 30300,
      "name": "Politcal Atty Loanzon - Lecture 1"
    },
    {
      "id": 30301,
      "name": "Politcal Atty Loanzon - Lecture 2"
    },
    {
      "id": 30302,
      "name": "Politcal Atty Loanzon - Lecture 3"
    },
    {
      "id": 30303,
      "name": "Politcal Atty Loanzon - Lecture 4"
    },
    {
      "id": 30304,
      "name": "Politcal Atty Loanzon - Lecture 5"
    },
    {
      "id": 30305,
      "name": "Politcal Atty Loanzon - Lecture 6"
    },
    {
      "id": 1006,
      "name": "Taxation Part 1"
    },
    {
      "id": 1007,
      "name": "Taxation Part 2"
    },
    {
      "id": 1008,
      "name": "Taxation Part 3"
    },
    {
      "id": 1009,
      "name": "Taxation Part 4"
    },
    {
      "id": 1100,
      "name": "Taxation Part 5"
    },
    {
      "id": 1110,
      "name": "Commercial Part 1"
    },
    {
      "id": 1120,
      "name": "Commercial Part 2"
    },
    {
      "id": 1130,
      "name": "Commercial Part 3"
    },
    {
      "id": 1140,
      "name": "Commercial Part 4"
    },
    {
      "id": 1150,
      "name": "Commercial Part 5"
    },
    {
      "id": 1160,
      "name": "Civil Part 1"
    },
    {
      "id": 1170,
      "name": "Civil Part 2"
    },
    {
      "id": 1180,
      "name": "Civil Part 2"
    },
    {
      "id": 1190,
      "name": "Civil Part 3"
    },
    {
      "id": 1200,
      "name": "Civil Part 4"
    },
    {
      "id": 1210,
      "name": "Civil Part 5"
    },
    {
      "id": 1220,
      "name": "Labort Part 1"
    },
    {
      "id": 1230,
      "name": "Labort Part 2"
    },
    {
      "id": 1240,
      "name": "Labort Part 3"
    },
    {
      "id": 20300,
      "name": "Judge Campanilla Criminal Part 1"
    },
    {
      "id": 20301,
      "name": "Judge Campanilla Criminal Part 2"
    },
    {
      "id": 20302,
      "name": "Judge Campanilla Criminal Part 3"
    },
    {
      "id": 20303,
      "name": "Judge Campanilla Criminal Part 4"
    },
    {
      "id": 20304,
      "name": "Judge Campanilla Criminal Part 5"
    },
	 {
      "id": 20305,
      "name": "Judge Campanilla Criminal Part 6"
    },
    {
      "id": 20306,
      "name": "Judge Campanilla Criminal Part 7"
    },
    {
      "id": 20307,
      "name": "Judge Campanilla Criminal Part 8"
    },
    {
      "id": 20308,
      "name": "Judge Campanilla Criminal Part 9"
    },
    {
      "id": 20304,
      "name": "Judge Campanilla Criminal Part 5"
    },
    {
      "id": 1300,
      "name": "Remedial Part 1"
    },
    {
      "id": 1310,
      "name": "Remedial Part 2"
    },
    {
      "id": 1320,
      "name": "Remedial Part 3"
    },
    {
      "id": 1330,
      "name": "Remedial Part 4"
    },
    {
      "id": 1350,
      "name": "Remedial Part 5"
    },
    {
      "id": 1360,
      "name": "Legal Ethics Part 1"
    },
    {
      "id": 1370,
      "name": "Legal Ethics Part 2"
    },
    {
      "id": 1380,
      "name": "Legal Ethics Part 3"
    }
  ]
};


export const genreSubjectList = [
{
  "genres": [
    {
      "id": 30300,
      "name": "Politcal Atty Loanzon - Lecture 1"
    },
    {
      "id": 30301,
      "name": "Politcal Atty Loanzon - Lecture 2"
    },
    {
      "id": 30302,
      "name": "Politcal Atty Loanzon - Lecture 3"
    },
    {
      "id": 30303,
      "name": "Politcal Atty Loanzon - Lecture 4"
    },
    {
      "id": 30304,
      "name": "Politcal Atty Loanzon - Lecture 5"
    },
    {
      "id": 30305,
      "name": "Politcal Atty Loanzon - Lecture 6"
    },
    {
      "id": 1007,
      "name": "Taxation Part 2"
    },
    {
      "id": 1008,
      "name": "Taxation Part 3"
    },
    {
      "id": 1009,
      "name": "Taxation Part 4"
    },
    {
      "id": 1100,
      "name": "Taxation Part 5"
    },
    {
      "id": 1110,
      "name": "Commercial Part 1"
    },
    {
      "id": 1120,
      "name": "Commercial Part 2"
    },
    {
      "id": 1130,
      "name": "Commercial Part 3"
    },
    {
      "id": 1140,
      "name": "Commercial Part 4"
    },
    {
      "id": 1150,
      "name": "Commercial Part 5"
    },
    {
      "id": 1160,
      "name": "Civil Part 1"
    },
    {
      "id": 1170,
      "name": "Civil Part 2"
    },
    {
      "id": 1180,
      "name": "Civil Part 2"
    },
    {
      "id": 1190,
      "name": "Civil Part 3"
    },
    {
      "id": 1200,
      "name": "Civil Part 4"
    },
    {
      "id": 1210,
      "name": "Civil Part 5"
    },
    {
      "id": 1220,
      "name": "Labort Part 1"
    },
    {
      "id": 1230,
      "name": "Labort Part 2"
    },
    {
      "id": 1240,
      "name": "Labort Part 3"
    },
    {
      "id": 20300,
      "name": "Judge Campanilla Criminal Part 1"
    },
    {
      "id": 20301,
      "name": "Judge Campanilla Criminal Part 2"
    },
    {
      "id": 20302,
      "name": "Judge Campanilla Criminal Part 3"
    },
    {
      "id": 20303,
      "name": "Judge Campanilla Criminal Part 4"
    },
    {
      "id": 20304,
      "name": "Judge Campanilla Criminal Part 5"
    },
	 {
      "id": 20305,
      "name": "Judge Campanilla Criminal Part 6"
    },
    {
      "id": 20306,
      "name": "Judge Campanilla Criminal Part 7"
    },
    {
      "id": 20307,
      "name": "Judge Campanilla Criminal Part 8"
    },
    {
      "id": 20308,
      "name": "Judge Campanilla Criminal Part 9"
    },
    {
      "id": 20304,
      "name": "Judge Campanilla Criminal Part 5"
    },
    {
      "id": 1300,
      "name": "Remedial Part 1"
    },
    {
      "id": 1310,
      "name": "Remedial Part 2"
    },
    {
      "id": 1320,
      "name": "Remedial Part 3"
    },
    {
      "id": 1330,
      "name": "Remedial Part 4"
    },
    {
      "id": 1350,
      "name": "Remedial Part 5"
    },
    {
      "id": 1360,
      "name": "Legal Ethics Part 1"
    },
    {
      "id": 1370,
      "name": "Legal Ethics Part 2"
    },
    {
      "id": 1380,
      "name": "Legal Ethics Part 3"
    }
  ]
}
];

export const SECTIONS: Sections = {
	movies: {
		sections: [
			{
				title: 'Judge Campanilla Criminal Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20300&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20301&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20302&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20303&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 5 ',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20304&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 6',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20305&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 7',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20306&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 8',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20307&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 9',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20308&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 10',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20309&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 11',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20310&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 12',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20311&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 13',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20312&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 14',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20313&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 15',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20314&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 16',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20315&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Political Atty Loanzon - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=30300&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Political Atty Loanzon - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=30301&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Political Atty Loanzon - Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=30302&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Political Atty Loanzon - Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=30303&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Political Atty Loanzon - Part 5',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=30304&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Political Atty Loanzon - Part 6',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=30305&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Political Atty Loanzon - Part 7',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=30306&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Taxation Atty. Lim - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=40301&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Taxation Atty. Lim - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=40302&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Taxation Atty. Lim - Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=40303&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Taxation Atty. Lim - Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=40304&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Taxation Atty. Lim - Part 5',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=40305&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Taxation Atty. Lim- Part 6',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=40306&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50301&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50302&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50303&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50304&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 5',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50305&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 6',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50306&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 7',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50307&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 8',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50308&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Benedict Kato - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=60301&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Benedict Kato - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=60302&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Remedial - Dean Salvador Moya III - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=70301&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Remedial - Dean Salvador Moya III - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=70302&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80301&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80302&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80303&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80304&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 5',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80305&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 6',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80306&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 7',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80309&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 8',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80310&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 9',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80311&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Dean Myra Gallardo-Batungbakal - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80307&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Dean Myra Gallardo-Batungbakal - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80308&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Commercial Lectures - Dean Serge Ceniza - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90001&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Commercial Lectures - Dean Serge Ceniza - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90002&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Commercial Lectures - Atty. Erickson Balmes - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90003&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Commercial Lectures - Atty. Erickson Balmes - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90004&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Legal Ethics - Dean Cecilio Duka',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90005&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Taxation - Atty. Lim',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90006&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Criminal - Judge Campanilla - Part I',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90007&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Criminal - Judge Campanilla - Part II',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90071&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Criminal - Judge Campanilla - Part III',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90072&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Criminal - Judge Campanilla - Part IV',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90073&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Criminal - Judge Campanilla - Part V',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90074&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Labor - Dean Pearlito Campanilla - Part I',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90008&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Labor - Dean Pearlito Campanilla - Part II',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90009&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Labor - Dean Pearlito Campanilla - Part III',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90010&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Labor - Dean Pearlito Campanilla - Part IV',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90011&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Commercial - Judge Rocille Aquino Tambasacan - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90012&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Remedial - Atty. Henedino Brondial',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90013&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Civil - Atty. Judy Lardizabal',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90014&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Commercial - Atty. Erickson Balmes - Part I',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90015&with_watch_providers=9&watch_region=PH`
			},
			{
				title: 'Preweek - Commercial - Atty. Erickson Balmes - Part II',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90016&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Political - Atty. Victoria Loanzon - Part I',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90020&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Political - Atty. Victoria Loanzon - Part II',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90021&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Political - Atty. Victoria Loanzon - Part III',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90022&with_watch_providers=8&watch_region=PH`
			}
		],
		helpers: {
			searchMovie: `/search/movie?api_key=${API_KEY}&query={{query}}`,
			fetchMovieGenres: `/genre/movie/list?api_key=${API_KEY}`,
			fetchMovieVideos: `/movie/{{movie_id}}/videos?api_key=${API_KEY}`,
			fetchMovieDetails: `/movie/{{movie_id}}?api_key=${API_KEY}`,
			fetchMovieRecommendations: `/movie/{{movie_id}}/recommendations?api_key=${API_KEY}`,
			fetchMovieCredits: `/movie/{{movie_id}}/credits?api_key=${API_KEY}`
		}
	},
	series: {
		sections: [
			{
				title: 'Judge Campanilla Criminal Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20300&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20301&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20302&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20303&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 5 ',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20304&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 6',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20305&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 7',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20306&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 8',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20307&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 9',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20308&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 10',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20309&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 11',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20310&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 12',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20311&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 13',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20312&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 14',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20313&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 15',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20314&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Judge Campanilla Criminal Part 16',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20315&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Political Atty Loanzon - Lecture 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=30300&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Political Atty Loanzon - Lecture 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=30301&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Political Atty Loanzon - Lecture 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=30302&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Political Atty Loanzon - Lecture 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=30303&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Political Atty Loanzon - Lecture 5',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=30304&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Political Atty Loanzon - Lecture 6',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=30305&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Political Atty Loanzon - Lecture 7',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=30306&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Taxation Atty. Lim - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=40301&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Taxation Atty. Lim - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=40302&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Taxation Atty. Lim - Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=40303&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Taxation Atty. Lim - Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=40304&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Taxation Atty. Lim - Part 5',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=40305&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Taxation Atty. Lim- Part 6',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=40306&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50301&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50302&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50303&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50304&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 5',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50305&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 6',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50306&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 7',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50307&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Pearlito Campanilla - Part 8',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=50308&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Benedict Kato - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=60301&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Labor - Atty. Benedict Kato - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=60302&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Remedial - Dean Salvador Moya III - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=70301&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Remedial - Dean Salvador Moya III - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=70302&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80301&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80302&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80303&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80304&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 5',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80305&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 6',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80306&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 7',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80309&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 8',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80310&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Atty. Judy Lardizabal - Part 9',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80311&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Dean Myra Gallardo-Batungbakal - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80307&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Civil Lectures - Dean Myra Gallardo-Batungbakal - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80308&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Commercial Lectures - Dean Serge Ceniza - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90001&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Commercial Lectures - Dean Serge Ceniza - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90002&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Commercial Lectures - Atty. Erickson Balmes - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90003&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Commercial Lectures - Atty. Erickson Balmes - Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90004&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Legal Ethics - Dean Cecilio Duka',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90005&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Taxation - Atty. Lim',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90006&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Criminal - Judge Campanilla - Part I',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90007&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Criminal - Judge Campanilla - Part II',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90071&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Criminal - Judge Campanilla - Part III',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90072&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Criminal - Judge Campanilla - Part IV',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90073&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Criminal - Judge Campanilla - Part V',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90074&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Labor - Dean Pearlito Campanilla - Part I',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90008&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Labor - Dean Pearlito Campanilla - Part II',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90009&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Labor - Dean Pearlito Campanilla - Part III',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90010&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Labor - Dean Pearlito Campanilla - Part IV',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90011&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Commercial - Judge Rocille Aquino Tambasacan - Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90012&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Remedial - Atty. Henedino Brondial',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90013&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Civil - Atty. Judy Lardizabal',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90014&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Commercial - Atty. Erickson Balmes - Part I',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90015&with_watch_providers=8&watch_region=PH`
			},	
			{
				title: 'Preweek - Commercial - Atty. Erickson Balmes - Part II',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90016&with_watch_providers=8&watch_region=PH`
			},			
			{
				title: 'Preweek - Political - Atty. Victoria Loanzon - Part I',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90020&with_watch_providers=8&watch_region=PH`
			},

			{
				title: 'Preweek - Political - Atty. Victoria Loanzon - Part II',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90021&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Preweek - Political - Atty. Victoria Loanzon - Part III',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=90022&with_watch_providers=8&watch_region=PH`
			}
			
		],
		helpers: {
			searchTV: `/search/tv?api_key=${API_KEY}&query={{query}}`,
			fetchTVGenres: `/genre/tv/list?api_key=${API_KEY}`,
			fetchTVGenresCommercial: `/genre/tv/com/list?api_key=${API_KEY}`,
			fetchTVGenresRemedial: `/genre/tv/rem/list?api_key=${API_KEY}`,
			fetchTVGenresCivil: `/genre/tv/civ/list?api_key=${API_KEY}`,
			fetchTVGenresLegalEthics: `/genre/tv/le/list?api_key=${API_KEY}`,
			fetchTVGenresTaxation: `/genre/tv/tax/list?api_key=${API_KEY}`,
			fetchTVGenresLabor: `/genre/tv/labor/list?api_key=${API_KEY}`,
			fetchTVGenresPolitical: `/genre/tv/political/list?api_key=${API_KEY}`,
			fetchTVVideos: `/tv/{{tv_id}}/videos?api_key=${API_KEY}`,
			fetchTVDetails: `/tv/{{tv_id}}?api_key=${API_KEY}`,
			fetchTVAggregateCredits: `/tv/{{tv_id}}/aggregate_credits?api_key=${API_KEY}`,
			fetchTVRecommendations: `/tv/{{tv_id}}/recommendations?api_key=${API_KEY}`,
			fetchTVSeasonPolitical: `/tv/{{tv_id}}/season/{{season_number}}?api_key=${API_KEY}`,
			fetchTVSeason: `/tv/{{tv_id}}/season/{{season_number}}?api_key=${API_KEY}`
		}
	}
};
