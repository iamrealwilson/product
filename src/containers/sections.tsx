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
				 userDetails != null && (userDetails.email === "arjayzoleta@gmail.com" ||userDetails.email === "arjayzoleta143@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Remedial") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "apbballesteros@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Taxation") || section.title.includes("Remedial") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "apbballesteros@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Taxation") || section.title.includes("Remedial") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "27ruizhoney@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@39")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@40")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@41")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal") || section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Civil") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Labor")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@42")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal") || section.title.includes("Preweek - Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@43")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Civil") || section.title.includes("Preweek - Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@44")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Legal Ethics") || section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Criminal") || section.title.includes("Preweek - Labor") || section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Civil") || section.title.includes("Preweek - Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@45")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Labor") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@46")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@47")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal") || section.title.includes("Preweek - Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@48")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@49")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal") || section.title.includes("Preweek - Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@50")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal") || section.title.includes("Preweek - Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@1")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email === "preweek@2")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@3")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 			
				 :
				 userDetails != null && (userDetails.email === "preweek@4")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 			
				 :
				 userDetails != null && (userDetails.email === "preweek@5")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal") || section.title.includes("Preweek - Political") || section.title.includes("Preweek - Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@6")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal") || section.title.includes("Preweek - Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@7")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@8")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Political") || section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Civil") || section.title.includes("Preweek - Labor") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@9")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Political") || section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Civil") || section.title.includes("Preweek - Labor") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@10")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@11")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Political") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@12")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@13")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@14")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Political") || section.title.includes("Preweek - Labor") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Civil") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@15")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@16")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@17")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Political") || section.title.includes("Preweek - Labor") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Civil") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@18")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Political") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@19")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@20")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@21")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@22")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Political") || section.title.includes("Preweek - Labor") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Civil") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@23")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Labor") || section.title.includes("Preweek - Political") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@24")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@25")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@26")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@27")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Political") || section.title.includes("Preweek - Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@28")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Political") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@29")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Labor") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@30")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Civil") || section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@31")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@32")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@33")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@33")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@34")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Civil") || section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@35")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Labor") || section.title.includes("Preweek - Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@36")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@37")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Political") ||  section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Civil") || section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Labor") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "preweek@38")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Preweek - Political") ||  section.title.includes("Preweek - Taxation") || section.title.includes("Preweek - Commercial") || section.title.includes("Preweek - Civil") || section.title.includes("Preweek - Remedial") || section.title.includes("Preweek - Labor") || section.title.includes("Preweek - Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "maehazellibed@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") ||  section.title.includes("Taxation") || section.title.includes("Commercial") || section.title.includes("Civil") || section.title.includes("Remedial") || section.title.includes("Labor") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "jodea.abalos@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Commercial") || section.title.includes("Taxation") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email === "ur_interpreter83@yahoo.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Political") || section.title.includes("Labor") || section.title.includes("Preweek")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email === "abalosglynn@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Political") || section.title.includes("Taxation") || section.title.includes("Preweek")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email === "arjayzoleta143@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Remedial") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email === "espiritumaryjoy8@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Commercial") || section.title.includes("Remedial") ||  section.title.includes("Criminal") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Labor")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email === "aalfe001@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Remedial") ||  section.title.includes("Criminal") || section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email === "jzchiong@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Civil") ||  section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "abagostolaw@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Remedial") || section.title.includes("Civil") ||  section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "plantabilliontrees.corp@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section =>  section.title.includes("Labor") || section.title.includes("Political") ||  section.title.includes("Civil") || section.title.includes("Commercial") || section.title.includes("Remedial") ||  section.title.includes("Criminal") || section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})			
				 :
				 userDetails != null && (userDetails.email === "garneryumul47@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Civil") ||  section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email === "rengamora@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Commercial") || section.title.includes("Remedial") ||  section.title.includes("Criminal") || section.title.includes("Labor")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email === "roxannejedv@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Remedial") || section.title.includes("Criminal") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Labor") || section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email === "poustura0208@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Political") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Commercial") || section.title.includes("Remedial") ||  section.title.includes("Criminal") || section.title.includes("Labor")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})				
				 :
				 userDetails != null && (userDetails.email === "butterflyvim001@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") ||  section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email === "cgmalana44@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Taxation") || section.title.includes("Political") ||  section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})				
				 :
				 userDetails != null && (userDetails.email === "jk.moyet@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Remedial") ||  section.title.includes("Criminal") || section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "raishihara1990@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Labor") ||  section.title.includes("Criminal") || section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
					:
				 userDetails != null && (userDetails.email === "rjtravilla@yahoo.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Labor") ||  section.title.includes("Criminal") || section.title.includes("Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "rosenclaires@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Remedial") ||  section.title.includes("Criminal") || section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "bautistajoel316@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Civil") || section.title.includes("Remedial") ||  section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email === "access1@gmail.com" || userDetails.email == "access2@gmail.com" || userDetails.email == "access3@gmail.com" || userDetails.email == "access4@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Commercial") || section.title.includes("Criminal") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "xtian.abejo@yahoo.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Taxation")  || section.title.includes("Criminal")  || section.title.includes("Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email === "cortez.ann71@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political")  || section.title.includes("Remedial") || section.title.includes("Civil")  || section.title.includes("Criminal")  || section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email === "polarisphoebe@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal")  || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})		
				 :
				 userDetails != null && (userDetails.email === "anniezaabubakar@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political")  ||  section.title.includes("Criminal")  || section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})				
				 :
				 userDetails != null && (userDetails.email === "rommelrn05@yahoo.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial")  || section.title.includes("Criminal")  || section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})				
                 :
				 userDetails != null && (userDetails.email === "espellargamae@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Remedial")  || section.title.includes("Labor")  || section.title.includes("Criminal")  || section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})									
				 :
				 userDetails != null && (userDetails.email === "access5@gmail.com" || userDetails.email === "access6@gmail.com" || userDetails.email === "access7@gmail.com" || userDetails.email == "access8@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Commercial") || section.title.includes("Criminal") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})			
				 :
				 userDetails != null && (userDetails.email === "joannabayani14@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Commercial") || section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "erwinmoji@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "estelleteekang@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
			     :
				 userDetails != null && (userDetails.email === "lexlibertatis8888@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Criminal") || section.title.includes("Taxation") || section.title.includes("Political") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "kmadrid1951@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Commercial") || section.title.includes("Criminal") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "omarmanalao@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Remedial") || section.title.includes("Taxation") || section.title.includes("Criminal") || section.title.includes("Labor") || section.title.includes("Civil") || section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 		
				 :
				 userDetails != null && (userDetails.email === "charlesllb14xiii@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Remedial") || section.title.includes("Taxation") || section.title.includes("Criminal") || section.title.includes("Labor") || section.title.includes("Civil") || section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 	
				 :
				 userDetails != null && (userDetails.email === "jose.chrisabejo@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Commercial") || section.title.includes("Taxation") || section.title.includes("Remedial") || section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 
				 :							
 				 userDetails != null && (userDetails.email === "jbquibolmba@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Commercial") || section.title.includes("Civil") || section.title.includes("Labor") || section.title.includes("Taxation") || section.title.includes("Political") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 		
				 :
				 userDetails != null && (userDetails.email === "alteza.angeles83@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Commercial") || section.title.includes("Taxation") || section.title.includes("Remedial") || section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 		
 				 :
				 userDetails != null && (userDetails.email === "idevesa@outlook.com")
				 ?
				 SECTIONS[category].sections.filter(section =>  section.title.includes("Remedial") || section.title.includes("Taxation") || section.title.includes("Commercial") || section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 		
 				 :
				 userDetails != null && (userDetails.email === "roy.ladiasan@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Taxation") || section.title.includes("Remedial") || section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 		
 				 :
				 userDetails != null && (userDetails.email === "dbbahil@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Labor") || section.title.includes("Civil") || section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 				
 				 :
				 userDetails != null && (userDetails.email === "kersieqgalang@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Remedial") || section.title.includes("Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "vincentsorianolucina@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Remedial") || section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})			
				 :
				 userDetails != null && (userDetails.email === "mjulespuerta@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})		
				 :
				 userDetails != null && (userDetails.email === "keemperworks@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Criminal") || section.title.includes("Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})		
				 :
				 userDetails != null && (userDetails.email === "ismaelalmanzour@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Commercial") || section.title.includes("Remedial") || section.title.includes("Taxation") || section.title.includes("Political") || section.title.includes("Criminal") || section.title.includes("Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})								
				 :
				 userDetails != null && (userDetails.email === "herreraabby1180@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Civil") || section.title.includes("Criminal") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "lai.fesalbon@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "vierneslarms@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Labor")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})			
				 :
				 userDetails != null && (userDetails.email === "emil@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				:
				userDetails != null && (userDetails.email === "espellargamae@gmai.com")
				?
				SECTIONS[category].sections.filter(section => section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
									   })		
			    :
				userDetails != null && (userDetails.email === "charlesllb14@gmail.com")
				?
				SECTIONS[category].sections.filter(section => section.title.includes("Civil") || section.title.includes("Commercial") || section.title.includes("Remedial") || section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
									   })	
				 :
				 userDetails != null && (userDetails.email === "fldoloiras@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Remedial") || section.title.includes("Civil") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})		
				 :
				 userDetails != null && (userDetails.email === "jackielagarto1975@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})		
				 :
				 userDetails != null && (userDetails.email === "muhajildee78@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Remedial") || section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})		
                 :
				 userDetails != null && (userDetails.email === "eucogco.lorna@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Taxation") || section.title.includes("Remedial") || section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})									
			     :
				 userDetails != null && (userDetails.email === "tangaran@law.com")
				 ?
				 SECTIONS[category].sections.filter(section =>  section.title.includes("Commercial") || section.title.includes("Labor") || section.title.includes("Remedial") || section.title.includes("Political") || section.title.includes("Taxation") || section.title.includes("Criminal") || section.title.includes("Civil") || section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "rubydoctor.1969@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Civil") || section.title.includes("Remedial") || section.title.includes("Criminal") || section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :			
				 userDetails != null && (userDetails.email === "samonte@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Civil") || section.title.includes("Commercial") || section.title.includes("Remedial") || section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})			
				 :		
				 userDetails != null && (userDetails.email === "elnor@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Civil") || section.title.includes("Commercial")|| section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :					 
				 userDetails != null && (userDetails.email === "aaron@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Remedial") || section.title.includes("Civil") || section.title.includes("Labor") || section.title.includes("Taxation") || section.title.includes("Political") || section.title.includes("Criminal") || section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :			
				 userDetails != null && (userDetails.email === "ncbapalattao@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Remedial") || section.title.includes("Civil") || section.title.includes("Labor") || section.title.includes("Taxation") || section.title.includes("Political") || section.title.includes("Criminal") || section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :			
				 userDetails != null && (userDetails.email === "merc@law.com" || userDetails.email === "merc1@law.com"  || userDetails.email === "merc2@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "sales@law.com" || userDetails.email === "sales1@law.com"  || userDetails.email === "sales2@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "p@p.com" || userDetails.email === "pp@p.com"  || userDetails.email === "poli@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political")).map((section, i) => {
				                console.log("Political");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "rem@law.com" || userDetails.email === "rem1@p.com"  || userDetails.email === "remedial@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Remedial")).map((section, i) => {
				                console.log("Remedial");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "tax@law.com" || userDetails.email === "xat@law.com"  || userDetails.email === "tax1@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Taxation")).map((section, i) => {
				                console.log("Taxation");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "labor@law.com" || userDetails.email === "labor1@law.com"  || userDetails.email === "labor2@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor")).map((section, i) => {
				                console.log("Labor");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email === "glenda@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Civil") || section.title.includes("Criminal") || section.title.includes("Remedial") || section.title.includes("Political") || section.title.includes("Taxation") ).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})			
				 :
				 userDetails != null && (userDetails.email === "package2@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Criminal") || section.title.includes("Political") || section.title.includes("Taxation") ).map((section, i) => {
				                console.log("Labor");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})									
				 :
				 userDetails != null && (userDetails.email === "package3@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Criminal") || section.title.includes("Political")).map((section, i) => {
				                console.log("Labor");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})									
				 :
				 userDetails != null && (userDetails.email === "package4@law.com" || userDetails.email == "abadilla@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Taxation") || section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
				                console.log("Package 4");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})									
				 :
				 userDetails != null && (userDetails.email === "allin@law.com" || userDetails.email == "allin1@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Taxation") || section.title.includes("Political") || section.title.includes("Remedial") || section.title.includes("Criminal")).map((section, i) => {
				                console.log("Package 4");
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})									
				 :
				 userDetails != null && (userDetails.email === "package5@law.com" || userDetails.email == "package6@law.com")
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
