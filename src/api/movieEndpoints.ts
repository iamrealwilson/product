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
		  "id": 90101,
		  "name": "Reviewer on Political Part 1"
		},
		{
		  "id": 90102,
		  "name": "Reviewer on Political Part 2"
		},
		{
		  "id": 90103,
		  "name": "Reviewer on Political Part 3"
		},
		{
		  "id": 90104,
		  "name": "Reviewer on Political Part 4"
		},
		{
		  "id": 90105,
		  "name": "Reviewer on Political Part 5"
		},
		{
		  "id": 90106,
		  "name": "Reviewer on Taxation Part 1"
		},
		{
		  "id": 90107,
		  "name": "Reviewer on Taxation Part 2"
		},
		{
		  "id": 90108,
		  "name": "Reviewer on Taxation Part 3"
		},
		{
		  "id": 90109,
		  "name": "Reviewer on Taxation Part 4"
		},
		{
		  "id": 90110,
		  "name": "Reviewer on Taxation Part 5"
		},
		{
		  "id": 90111,
		  "name": "Reviewer on Commercial Part 1"
		},
		{
		  "id": 90112,
		  "name": "Reviewer on Taxation Part 2"
		},
		{
		  "id": 90113,
		  "name": "Reviewer on Taxation Part 3"
		},
		{
		  "id": 90114,
		  "name": "Reviewer on Taxation Part 4"
		},
		{
		  "id": 90115,
		  "name": "Reviewer on Taxation Part 5"
		},
		{
		  "id": 90116,
		  "name": "Reviewer on Civil Part 1"
		},
		{
		  "id": 90117,
		  "name": "Reviewer on Civil Part 2"
		},
		{
		  "id": 90118,
		  "name": "Reviewer on Civil Part 2"
		},
		{
		  "id": 90119,
		  "name": "Reviewer on Civil Part 3"
		},
		{
		  "id": 90120,
		  "name": "Reviewer on Civil Part 4"
		},
		{
		  "id": 90121,
		  "name": "Reviewer on Civil Part 5"
		},
		{
		  "id": 90122,
		  "name": "Reviewer on Labort Part 1"
		},
		{
		  "id": 90123,
		  "name": "Reviewer on Labort Part 2"
		},
		{
		  "id": 90124,
		  "name": "Reviewer on Labort Part 3"
		},
		{
		  "id": 90125,
		  "name": "Reviewer on Criminal Part 1"
		},
		{
		  "id": 90126,
		  "name": "Reviewer on Criminal Part 2"
		},
		{
		  "id": 90127,
		  "name": "Reviewer on Criminal Part 3"
		},
		{
		  "id": 90128,
		  "name": "Reviewer on Criminal Part 4"
		},
		{
		  "id": 90129,
		  "name": "Reviewer on Criminal Part 5"
		},
		{
		  "id": 90130,
		  "name": "Reviewer on Remedial Part 1"
		},
		{
		  "id": 90131,
		  "name": "Reviewer on Remedial Part 2"
		},
		{
		  "id": 90132,
		  "name": "Reviewer on Remedial Part 3"
		},
		{
		  "id": 90133,
		  "name": "Reviewer on Remedial Part 4"
		},
		{
		  "id": 90135,
		  "name": "Reviewer on Remedial Part 5"
		},
		{
		  "id": 90136,
		  "name": "Reviewer on Legal Ethics Part 1"
		},
		{
		  "id": 90137,
		  "name": "Reviewer on Legal Ethics Part 2"
		},
		{
		  "id": 90138,
		  "name": "Reviewer on Legal Ethics Part 3"
		}
	  ]
};


export const genreSubjectList = [
{
  "genres": [
    {
      "id": 1001,
      "name": "Politcal Part 1"
    },
    {
      "id": 1002,
      "name": "Political Part 2"
    },
    {
      "id": 1003,
      "name": "Political Part 3"
    },
    {
      "id": 1004,
      "name": "Political Part 4"
    },
    {
      "id": 1005,
      "name": "Political Part 5"
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
      "id": 1250,
      "name": "Criminal Part 1"
    },
    {
      "id": 1260,
      "name": "Criminal Part 2"
    },
    {
      "id": 1270,
      "name": "Criminal Part 3"
    },
    {
      "id": 1280,
      "name": "Criminal Part 4"
    },
    {
      "id": 1290,
      "name": "Criminal Part 5"
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
				title: 'Criminal Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Criminal Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Criminal Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Criminal Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Political Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=18&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Political Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=14&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Political Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=80&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Political Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=9648&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Commercial Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=28&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Commercial Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=35&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Commercial Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=16&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Commercial Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=12&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Taxation Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10751&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Taxation Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10770&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Taxation Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=99&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Taxation Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10752&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Civil Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=36&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Civil Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=37&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Civil Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Civil Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Labor Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Labor Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Labor Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Labor Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Remedial Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Remedial Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Remedial Part 3',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Remedial Part 4',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Legal Ethics Part 1',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Legal Ethics Part 2',
				endpoint: `/discover/movie?api_key=${API_KEY}&with_genres=53&with_watch_providers=8&watch_region=PH`
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
				title: 'Criminal Part 1',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Criminal Part 2',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Criminal Part 3',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Criminal Part 4',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Political Part 1',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Political Part 2',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Political Part 3',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Political Part 4',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Commercial Part 1',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Commercial Part 2',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Commercial Part 3',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Commercial Part 4',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Taxation Part 1',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Taxation Part 2',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Taxation Part 3',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Taxation Part 4',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Civil Part 1',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Civil Part 2',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Civil Part 3',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Civil Part 4',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Labor Part 1',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Labor Part 2',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Labor Part 3',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Labor Part 4',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Remedial Part 1',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Remedial Part 2',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Remedial Part 3',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Remedial Part 4',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Legal Ethics Part 1',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			},
			{
				title: 'Reviewer on Legal Ethics Part 2',
				endpoint: `/discover/tv?api_key=${API_KEY}&with_genres=20328&with_watch_providers=8&watch_region=PH`
			}
		],
		helpers: {
			searchTV: `/search/tv?api_key=${API_KEY}&query={{query}}`,
			fetchTVGenres: `/genre/tv/list?api_key=${API_KEY}`,
			fetchTVVideos: `/tv/{{tv_id}}/videos?api_key=${API_KEY}`,
			fetchTVDetails: `/tv/{{tv_id}}?api_key=${API_KEY}`,
			fetchTVAggregateCredits: `/tv/{{tv_id}}/aggregate_credits?api_key=${API_KEY}`,
			fetchTVRecommendations: `/tv/{{tv_id}}/recommendations?api_key=${API_KEY}`,
			fetchTVSeason: `/tv/{{tv_id}}/season/{{season_number}}?api_key=${API_KEY}`
		}
	}
};
