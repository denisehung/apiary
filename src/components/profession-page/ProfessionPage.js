/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import ProfessionHero from '../profession-hero/ProfessionHero';
import Header from '../header/Header';
import Projects from '../projects/Projects';
import professionHeroTitles from '../../arrays/profession-hero-titles';
import professionHeroCards from '../../arrays/profession-hero-cards';
import projectsPageTitles from '../../arrays/projects-page-titles'; // import titles to be used in profession page
import {
  dataAnalysisProjects,
  dataScienceProjects,
  webDevProjects,
} from '../../arrays/delegate-tasks';

function ProfessionPage(props) {
  const { id } = useParams();
  const professionTitle = professionHeroTitles.find((page) => page.id === id);
  const professionCard = professionHeroCards.find((cardGroup) => cardGroup.id === id);

  const [projectDisplay, setProjectDisplay] = React.useState(webDevProjects);
  const [projectTitle, setProjectTitle] = React.useState(projectsPageTitles.webDev.title);

  React.useEffect(() => {
    if (id === 'web-dev') {
      setProjectDisplay(webDevProjects);
      setProjectTitle(projectsPageTitles.webDev.title);
    } else if (id === 'data-analysis') {
      setProjectDisplay(dataAnalysisProjects);
      setProjectTitle(projectsPageTitles.dataAnalysis.title);
    } else if (id === 'data-science') {
      setProjectDisplay(dataScienceProjects);
      setProjectTitle(projectsPageTitles.dataScience.title);
    }
  }, [id]);

  return (
    <>
      <Header professionPage={props.professionPage} setProfessionPage={props.setProfessionPage}>
        <li className="header__list">
          <NavLink className="header__link" exact to="/" smooth={true} onClick={props.onNavClick}>
            Back to homepage
          </NavLink>
        </li>
        <li className="header__list">
          <Link className="header__link" to="projects" smooth={true} onClick={props.onNavClick}>
            Students' projects
          </Link>
        </li>
      </Header>
      <ProfessionHero professionTitle={professionTitle} professionCard={professionCard} />
      <Projects
        name="projects"
        title={projectTitle}
        defaultDisplay={projectDisplay}
        displayCourseButtons={props.displayCourseButtons}
      />
    </>
  );
}

export default ProfessionPage;

// Colin these props will be the things you change when you route this component
// For the profession pages select the corresponding titles from pageTitles
// select the defaultDisplay from delegate-tasks
// displayCourseButtons will be false