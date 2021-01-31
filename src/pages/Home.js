import React, { useEffect } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadProjects } from '../actions/projectsAction';
import Project from '../components/Project';
// Styled and Animation
import Styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
 const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch])
  const {popular, newProj, upcoming} =  useSelector(state => state.projects);
 return (
  <ProjectsList>
    {/** Upcoming Projects */}
    <h2>Upcoming Projects</h2>
    <Projects>
      {upcoming.map(project => (
        <Project
          name={project.name}
          released={project.released}
          background_image={project.background_image}
          key={project.id}
        />
      ))}
    </Projects>
    {/** Popular Projects */}
    <h2>Popular Projects</h2>
    <Projects>
      {popular.map(project => (
        <Project
          name={project.name}
          released={project.released}
          background_image={project.background_image}
          key={project.id}
        />
      ))}
    </Projects>
    {/** New Projects */}
    <h2>New Projects</h2>
    <Projects>
      {newProj.map(project => (
        <Project
          name={project.name}
          released={project.released}
          background_image={project.background_image}
          key={project.id}
        />
      ))}
    </Projects>
  </ProjectsList>
 )
}

const ProjectsList = Styled(motion.div)`
  padding: 0rem 5rem;
  h2{
    padding: 5rem 0rem;
  }
`;
const Projects = Styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home
