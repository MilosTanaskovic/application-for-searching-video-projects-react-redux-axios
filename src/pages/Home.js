import React, { useEffect } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadProjects } from '../actions/projectsAction';
import Project from '../components/mainPage/Project';
import {ProjectDetail} from "../components/mainPage/ProjectDetail";
// React Router
import {useLocation} from 'react-router-dom';
// Styled and Animation
import Styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from "../animations";

const Home = () => {
 const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch])
  // get thee current location
  const location = useLocation()
  const pathId = location.pathname.split("/")[2];
  const {popular, newProj, upcoming, searched} =  useSelector(state => state.projects);
  // Count all projs
  let projs = (popular.length + newProj.length + upcoming.length);
  let allProjss = (projs + searched.length);


 return (
  <ProjectsList 
    variants={fadeIn} 
    initial="hidden"
    animate="show"
  >
    <AnimateSharedLayout>
    <AnimatePresence>
      {/** Pop-Up*/} 
       {pathId && <ProjectDetail pathId={pathId}/>}
    </AnimatePresence>
    {/** All Projects */}
    <AllProjs>
      <p>All Projs - {searched ? allProjss : projs } results</p>
    </AllProjs>
    {/** Searched */}
    { searched.length ? (
      <div className="searched">
      <h2>Searched Projects</h2>
      <Projects>
        {searched.map(project => (
          <Project
            id={project.id}
            name={project.name}
            released={project.released}
            background_image={project.background_image}
            video_count={project.ratings_count}
            slug={project.slug}
            key={project.id}
          />
        ))}
      </Projects>
    </div>
    ): ''}
    {/** Upcoming Projects */}
    <h2>Upcoming Projects</h2>
    <Projects>
      {upcoming.map(project => (
        <Project
          id={project.id}
          name={project.name}
          released={project.released}
          background_image={project.background_image}
          video_count={project.ratings_count}
          slug={project.slug}
          key={project.id}
        />
      ))}
    </Projects>
    {/** Popular Projects */}
    <h2>Popular Projects</h2>
    <Projects>
      {popular.map(project => (
        <Project
          id={project.id}
          name={project.name}
          released={project.released}
          background_image={project.background_image}
          video_count={project.ratings_count}
          slug={project.slug}
          key={project.id}
        />
      ))}
    </Projects>
    {/** New Projects */}
    <h2>New Projects</h2>
    <Projects>
      {newProj.map(project => (
        <Project
          id={project.id}
          name={project.name}
          released={project.released}
          background_image={project.background_image}
          video_count={project.ratings_count}
          slug={project.slug}
          key={project.id}
        />
      ))}
    </Projects>
    </AnimateSharedLayout>
  </ProjectsList>
 )
}

const ProjectsList = Styled(motion.div)`
  padding: 0rem 2rem;
  background-color: #2e2e38;
  h2{
    padding: 5rem 0rem;
  }
`;
const AllProjs = Styled(motion.div)`
  padding: 40px 0px;
  opacity: 0.35;
  border-bottom: 3px solid #8D8D8E;
  p{
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    display: flex;
    align-items: center;
    color: #B0B3B5;
  }
`;
const Projects = Styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home
