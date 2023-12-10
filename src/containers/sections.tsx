import React from 'react';
import { SECTIONS } from '../api/movieEndpoints';
import { Show } from '../components';
import SliderContainer from './slider';
import { User } from '../constants/types';

type SectionsContainerType = {
	userDetails: User | null;
	category: string;
	sectionDisplayed: number;
};
function SectionsContainer({ userDetails, category, sectionDisplayed }: SectionsContainerType) {
	return (
		<React.Fragment>
			<Show.Sections>
				{userDetails != null && (userDetails.email == "c@c.com" || userDetails.email == "cc@c.com" || userDetails.email == "first@law.com" || userDetails.email == "law@law.com") 
				 ? 
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal")).map((section, i) => {
				                console.log("Criminal");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "p@p.com" || userDetails.email == "pp@p.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political")).map((section, i) => {
				                console.log("Political");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 SECTIONS[category].sections.map((section, i) => {
			                console.log("Not Criminal");
							return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
				})
				}
			</Show.Sections>
		</React.Fragment>
	);
}

export default SectionsContainer;
