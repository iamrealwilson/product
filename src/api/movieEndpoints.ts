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
