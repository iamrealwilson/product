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
				 userDetails != null && (userDetails.email == "ur_interpreter83#@yahoo.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Political") || section.title.includes("Labor") || section.title.includes("Preweek")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email == "arjayzoleta143@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Remedial") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email == "espiritumaryjoy8@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Commercial") || section.title.includes("Remedial") ||  section.title.includes("Criminal") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Labor")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email == "aalfe001@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Remedial") ||  section.title.includes("Criminal") || section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email == "jzchiong@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Civil") ||  section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "abagostolaw@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Remedial") || section.title.includes("Civil") ||  section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "plantabilliontrees.corp@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section =>  section.title.includes("Labor") || section.title.includes("Political") ||  section.title.includes("Civil") || section.title.includes("Commercial") || section.title.includes("Remedial") ||  section.title.includes("Criminal") || section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})			
				 :
				 userDetails != null && (userDetails.email == "garneryumul47@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Civil") ||  section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email == "rengamora@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Commercial") || section.title.includes("Remedial") ||  section.title.includes("Criminal") || section.title.includes("Labor")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email == "roxannejedv@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Remedial") || section.title.includes("Criminal") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Labor") || section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email == "poustura0208@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Political") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Commercial") || section.title.includes("Remedial") ||  section.title.includes("Criminal") || section.title.includes("Labor")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})				
				 :
				 userDetails != null && (userDetails.email == "butterflyvim001@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") ||  section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email == "cgmalana44@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Taxation") || section.title.includes("Political") ||  section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})				
				 :
				 userDetails != null && (userDetails.email == "jk.moyet@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Remedial") ||  section.title.includes("Criminal") || section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "raishihara1990@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Labor") ||  section.title.includes("Criminal") || section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
					:
				 userDetails != null && (userDetails.email == "rjtravilla@yahoo.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Labor") ||  section.title.includes("Criminal") || section.title.includes("Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "rosenclaires@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Remedial") ||  section.title.includes("Criminal") || section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "bautistajoel316@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Civil") || section.title.includes("Remedial") ||  section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email == "access1@gmail.com" || userDetails.email == "access2@gmail.com" || userDetails.email == "access3@gmail.com" || userDetails.email == "access4@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Commercial") || section.title.includes("Criminal") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "xtian.abejo@yahoo.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Taxation")  || section.title.includes("Criminal")  || section.title.includes("Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email == "cortez.ann71@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political")  || section.title.includes("Remedial") || section.title.includes("Civil")  || section.title.includes("Criminal")  || section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})	
				 :
				 userDetails != null && (userDetails.email == "polarisphoebe@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal")  || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})		
				 :
				 userDetails != null && (userDetails.email == "anniezaabubakar@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political")  ||  section.title.includes("Criminal")  || section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})				
				 :
				 userDetails != null && (userDetails.email == "rommelrn05@yahoo.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial")  || section.title.includes("Criminal")  || section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})				
                 :
				 userDetails != null && (userDetails.email == "espellargamae@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Remedial")  || section.title.includes("Labor")  || section.title.includes("Criminal")  || section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})									
				 :
				 userDetails != null && (userDetails.email == "access5@gmail.com" || userDetails.email == "access6@gmail.com" || userDetails.email == "access7@gmail.com" || userDetails.email == "access8@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Commercial") || section.title.includes("Criminal") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})			
				 :
				 userDetails != null && (userDetails.email == "joannabayani14@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Commercial") || section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "erwinmoji@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "estelleteekang@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
			     :
				 userDetails != null && (userDetails.email == "lexlibertatis8888@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Criminal") || section.title.includes("Taxation") || section.title.includes("Political") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "kmadrid1951@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Commercial") || section.title.includes("Criminal") || section.title.includes("Taxation") || section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "omarmanalao@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Remedial") || section.title.includes("Taxation") || section.title.includes("Criminal") || section.title.includes("Labor") || section.title.includes("Civil") || section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 		
				 :
				 userDetails != null && (userDetails.email == "charlesllb14xiii@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Remedial") || section.title.includes("Taxation") || section.title.includes("Criminal") || section.title.includes("Labor") || section.title.includes("Civil") || section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 	
				 :
				 userDetails != null && (userDetails.email == "jose.chrisabejo@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Commercial") || section.title.includes("Taxation") || section.title.includes("Remedial") || section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 
				 :							
 				 userDetails != null && (userDetails.email == "jbquibolmba@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Commercial") || section.title.includes("Civil") || section.title.includes("Labor") || section.title.includes("Taxation") || section.title.includes("Political") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 		
				 :
				 userDetails != null && (userDetails.email == "roy.ladiasan@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Taxation") || section.title.includes("Remedial") || section.title.includes("Civil") || section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 		
 				 :
				 userDetails != null && (userDetails.email == "dbbahil@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Labor") || section.title.includes("Civil") || section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							}) 				
 				 :
				 userDetails != null && (userDetails.email == "kersieqgalang@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Remedial") || section.title.includes("Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "vincentsorianolucina@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal") || section.title.includes("Remedial") || section.title.includes("Political")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})			
				 :
				 userDetails != null && (userDetails.email == "mjulespuerta@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})		
				 :
				 userDetails != null && (userDetails.email == "keemperworks@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Criminal") || section.title.includes("Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})		
				 :
				 userDetails != null && (userDetails.email == "ismaelalmanzour@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Labor") || section.title.includes("Commercial") || section.title.includes("Remedial") || section.title.includes("Taxation") || section.title.includes("Political") || section.title.includes("Criminal") || section.title.includes("Civil")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})								
				 :
				 userDetails != null && (userDetails.email == "herreraabby1180@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Civil") || section.title.includes("Criminal") || section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "lai.fesalbon@gmail.com")
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
				 userDetails != null && (userDetails.email == "emil@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				:
				userDetails != null && (userDetails.email == "espellargamae@gmai.com")
				?
				SECTIONS[category].sections.filter(section => section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
									   })		
			    :
				userDetails != null && (userDetails.email == "charlesllb14@gmail.com")
				?
				SECTIONS[category].sections.filter(section => section.title.includes("Civil") || section.title.includes("Commercial") || section.title.includes("Remedial") || section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
									   })	
				 :
				 userDetails != null && (userDetails.email == "fldoloiras@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Remedial") || section.title.includes("Civil") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})		
				 :
				 userDetails != null && (userDetails.email == "jackielagarto1975@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})		
				 :
				 userDetails != null && (userDetails.email == "muhajildee78@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Remedial") || section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})		
                 :
				 userDetails != null && (userDetails.email == "eucogco.lorna@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Taxation") || section.title.includes("Remedial") || section.title.includes("Political") || section.title.includes("Criminal")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})									
			     :
				 userDetails != null && (userDetails.email == "tangaran@law.com")
				 ?
				 SECTIONS[category].sections.filter(section =>  section.title.includes("Commercial") || section.title.includes("Labor") || section.title.includes("Remedial") || section.title.includes("Political") || section.title.includes("Taxation") || section.title.includes("Criminal") || section.title.includes("Civil") || section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "rubydoctor.1969@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Political") || section.title.includes("Civil") || section.title.includes("Remedial") || section.title.includes("Criminal") || section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :			
				 userDetails != null && (userDetails.email == "samonte@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Civil") || section.title.includes("Commercial") || section.title.includes("Remedial") || section.title.includes("Taxation")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})			
				 :		
				 userDetails != null && (userDetails.email == "elnor@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Civil") || section.title.includes("Commercial")|| section.title.includes("Remedial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :					 
				 userDetails != null && (userDetails.email == "aaron@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Remedial") || section.title.includes("Civil") || section.title.includes("Labor") || section.title.includes("Taxation") || section.title.includes("Political") || section.title.includes("Criminal") || section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :			
				 userDetails != null && (userDetails.email == "ncbapalattao@gmail.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Remedial") || section.title.includes("Civil") || section.title.includes("Labor") || section.title.includes("Taxation") || section.title.includes("Political") || section.title.includes("Criminal") || section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :			
				 userDetails != null && (userDetails.email == "merc@law.com" || userDetails.email == "merc1@law.com"  || userDetails.email == "merc2@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial")).map((section, i) => {
								return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
							})
				 :
				 userDetails != null && (userDetails.email == "sales@law.com" || userDetails.email == "sales1@law.com"  || userDetails.email == "sales2@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Civil")).map((section, i) => {
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
				 userDetails != null && (userDetails.email == "glenda@law.com")
				 ?
				 SECTIONS[category].sections.filter(section => section.title.includes("Commercial") || section.title.includes("Civil") || section.title.includes("Criminal") || section.title.includes("Remedial") || section.title.includes("Political") || section.title.includes("Taxation") ).map((section, i) => {
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
