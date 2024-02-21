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
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal")).map((section, i) => {
				                console.log("Criminal");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "p@p.com" || userDetails.email == "pp@p.com"  || userDetails.email == "poli@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political")).map((section, i) => {
				                console.log("Political");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "rem@law.com" || userDetails.email == "rem1@p.com"  || userDetails.email == "remedial@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Remedial")).map((section, i) => {
				                console.log("Remedial");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "tax@law.com" || userDetails.email == "xat@law.com"  || userDetails.email == "tax1@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Taxation")).map((section, i) => {
				                console.log("Taxation");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "labor@law.com" || userDetails.email == "labor1@law.com"  || userDetails.email == "labor2@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor")).map((section, i) => {
				                console.log("Labor");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
			     :
				 userDetails != null && (userDetails.email == "polirem@law.com" || userDetails.email == "polirem1@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") && section.title.includes("Moya")).map((section, i) => {
				                console.log("Package 4");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "package2@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Criminal") || section.title.includes("Political") || section.title.includes("Taxation") ).map((section, i) => {
				                console.log("Labor");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})									
				 :
				 userDetails != null && (userDetails.email == "package3@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Criminal") || section.title.includes("Political")).map((section, i) => {
				                console.log("Labor");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})									
				 :
				 userDetails != null && (userDetails.email == "package4@law.com" || userDetails.email == "abadilla@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Taxation") || section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
				                console.log("Package 4");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})									
				 :
				 userDetails != null && (userDetails.email == "allin@law.com" || userDetails.email == "allin1@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Taxation") || section.title.includes("Political") || section.title.includes("Remedial") || section.title.includes("Criminal")).map((section, i) => {
				                console.log("Package 4");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})									
				 :
				 userDetails != null && (userDetails.email == "package5@law.com" || userDetails.email == "package6@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Taxation") || section.title.includes("Political")).map((section, i) => {
				                console.log("Package 5");
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
