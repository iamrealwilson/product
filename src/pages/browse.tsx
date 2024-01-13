import React, { useState, useEffect } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import movieHttp from '../api/movie';
import { Loading } from '../components';
import {
	HeaderContainer,
	HeroContainer,
	SectionsContainer,
	ProfilesContainer,
	PlayerContainer,
	SearchContainer
} from '../containers';
import { useUser } from '../context/UserContext';
import { PlayerContext } from '../context/PlayerContext';
import { DetailsContainer } from '../containers';
import { SECTIONS, genreMovieList, genreSubjectList } from '../api/movieEndpoints';
import { Genre, Profile, ShowOverview, TrailerDisplayed } from '../constants/types';

function Browse() {
	const { userDetails } = useUser();
	const [ profile, setProfile ] = useState<Profile>();
	const [ loading, setLoading ] = useState(true);
	const [ playing, setPlaying ] = useState<ShowOverview | null | undefined>();
	const [ detailsTrailer, setDetailsTrailer ] = useState();
	const [ heroTrailer, setHeroTrailer ] = useState<string | null | undefined>();
    const [ videoPlayerMiniSeries, setVideoPlayerMiniSeries ] = useState<string | null | undefined>();
	const [ trailerDisplayed, setTrailerDisplayed ] = useState<TrailerDisplayed | null | undefined>();
	const [ isMuted, setIsMuted ] = useState(true);
	const [ category, setCategory ] = useState('series');
	const [ isHeaderShown, setHeaderShown ] = useState(false);
	const [ sectionDisplayed, setSectionDisplayed ] = useState(5);
	const [ searchResult, setSearchResult ] = useState<Array<ShowOverview> | null>();
	const [ genres, setGenres ] = useState<Array<Genre> | undefined | null>();

	useEffect(
		() => {
			setLoading(true);
			var timeoutID = setTimeout(() => {
				setLoading(false);
			}, 1000);
			return () => {
				clearTimeout(timeoutID);
			};
		},
		[ profile ]
	);

	useEffect(
		() => {
			try {
				var endpoint = "";
				var genres = {};
				if (userDetails != null){
				    console.log("Email --- " + userDetails.email);
					if (userDetails.email == "c@c.com" || userDetails.email == "cc@c.com"){
						endpoint =
							category === 'series' ? SECTIONS.series.helpers.fetchTVGenres : SECTIONS.movies.helpers.fetchMovieGenres;
					}
					if (userDetails.email == "civ@civ.com" || userDetails.email == "cciv@civ.com"){
						endpoint =
							category === 'series' ? SECTIONS.series.helpers.fetchTVGenresCivil : SECTIONS.movies.helpers.fetchMovieGenres;
					}
					if (userDetails.email == "l@l.com" || userDetails.email == "ll@l.com"){
						endpoint =
							category === 'series' ? SECTIONS.series.helpers.fetchTVGenresLabor : SECTIONS.movies.helpers.fetchMovieGenres;
					}
					if (userDetails.email == "p@p.com" || userDetails.email == "pp@p.com"){
						endpoint =
							category === 'series' ? SECTIONS.series.helpers.fetchTVGenresPolitical : SECTIONS.movies.helpers.fetchMovieGenres;
					}
					if (userDetails.email == "le@le.com" || userDetails.email == "lle@le.com"){
						endpoint =
							category === 'series' ? SECTIONS.series.helpers.fetchTVGenresLegalEthics : SECTIONS.movies.helpers.fetchMovieGenres;
					}
					if (userDetails.email == "r@r.com" || userDetails.email == "rr@r.com"){
						endpoint =
							category === 'series' ? SECTIONS.series.helpers.fetchTVGenresRemedial : SECTIONS.movies.helpers.fetchMovieGenres;
					}
					if (userDetails.email == "cm@cm.com" || userDetails.email == "ccm@cm.com"){
						endpoint =
							category === 'series' ? SECTIONS.series.helpers.fetchTVGenresCommercial : SECTIONS.movies.helpers.fetchMovieGenres;
					}
					if (userDetails.email == "tax@law.com" || userDetails.email == "xat@law.com"  || userDetails.email == "tax1@law.com"){
						endpoint =
							category === 'series' ? SECTIONS.series.helpers.fetchTVGenresTaxation : SECTIONS.movies.helpers.fetchMovieGenres;
					}
				}
				movieHttp.get(endpoint).then((response) => 
				  withCommonLog(response)
				);
				setSectionDisplayed(30);
			} catch ({ response }) {
				console.log(response);
			}
		},
		[ category, setSectionDisplayed ]
	);
	
	function withCommonLog(response : any){
		console.log(response.data.genres);
		setGenres(() => response.data.genres );
	}

	const handleOnScroll = ({ clientHeight, scrollTop, scrollHeight }: any) => {
		const bottom = Math.ceil(clientHeight + scrollTop) >= scrollHeight - 300;
		if (bottom) {
			setSectionDisplayed((sectionDisplayed) => {
				const newDisplayed = sectionDisplayed + 5;
				return newDisplayed <= SECTIONS[category].sections.length ? newDisplayed : sectionDisplayed;
			});
		}
		if (scrollTop > 100 && !isHeaderShown) {
			setHeaderShown(true);
		} else if (scrollTop <= 100 && isHeaderShown) {
			setHeaderShown(false);
		}
	};

	return profile ? (
		<PlayerContext.Provider
			value={{
				playing: { playing, setPlaying },
				detailsTrailer: { detailsTrailer, setDetailsTrailer },
				isMuted: { isMuted, setIsMuted },
				category: { category, setCategory },
				heroTrailer: { heroTrailer, setHeroTrailer },
				trailerDisplayed: { trailerDisplayed, setTrailerDisplayed },
				genres: { genres, setGenres }
			}}
		>
			<Scrollbar noDefaultStyles className="main-scrollbar" onScroll={(e: any) => handleOnScroll(e)}>
				<div className="browse">
					{loading && profile ? <Loading src={profile.avatar} /> : <Loading.ReleaseBody />}
					{detailsTrailer && <DetailsContainer />}
					<HeaderContainer
						profile={profile}
						setProfile={setProfile}
						isHeaderShown={isHeaderShown}
						category={category}
						setCategory={setCategory}
						setSearchResult={setSearchResult}
						setHeroTrailer={setHeroTrailer}
					/>
					{searchResult ? (
						<SearchContainer searchResult={searchResult} />
					) : (
						<React.Fragment>
							<HeroContainer profile={profile} />
							<SectionsContainer userDetails={userDetails} category={category} sectionDisplayed={sectionDisplayed} />
						</React.Fragment>
					)}

					{playing && <PlayerContainer playing={playing} setPlaying={setPlaying} />}
				</div>
			</Scrollbar>
		</PlayerContext.Provider>
	) : (
		<ProfilesContainer userDetails={userDetails} setProfile={setProfile} />
	);
}

export default Browse;
