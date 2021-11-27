import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projectData from "app/projectData/projectData";
import PageUp from "../PageUp/PageUp";
import PageDown from "../PageDown/PageDown";
import styles from "./Projects.module.scss";



const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);
  const { ref, inView } = useInView();
  
  useEffect(() => {
    if (inView) {
      setShowProjects(true);
    }
    
    
  }, [inView])

  return (
    <div className={styles.projects} id="projects">
      <PageUp link='#' />
      <div className={styles.title}>PROJECTS</div>
      <div className={styles.grid}>
        <div ref={ref} className={styles.cards}>
          {showProjects && projectData.map((project, key) => (
            <motion.div 
              initial={{
                opacity: 0,
                scale: 0,
                
              }}
              animate={{
                opacity: 1,
                scale: 1,
                
              }}
              transition={{
                duration: 0.5
                
              }}
              key={key} 
              className={styles.card}
            >
              <ProjectCard
                name={project.name}
                tags={project.tags}
                image={project.image}
                demo={project.demo}
                git={project.github}
                info={project.objective}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <PageDown link='#contact' />
    </div>
  );
};

export default Projects;
