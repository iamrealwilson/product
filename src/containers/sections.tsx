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
				{userDetails != null && (userDetails.email == "dolo@law.com" || userDetails.email == "culpa@law.com" || userDetails.email == "c@c.com" || userDetails.email == "first@law.com" || userDetails.email == "law@law.com" || userDetails.email == "crim@law.com" || userDetails.email == "rcriminal@law.com" || userDetails.email == "dcriminal@law.com" || userDetails.email == "qcriminal@law.com") 
				 ? 
				 SECTIONS[category].sections.map((section, i) => {
					return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
				})
				 :
				 SECTIONS[category].sections.map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				}
			</Show.Sections>
		</React.Fragment>
	);
}

export default SectionsContainer;
