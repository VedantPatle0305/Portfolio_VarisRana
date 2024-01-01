import React from 'react'
import styles from "./Project.module.css";
import projects from "../../Data/project.json";
import ProjectCard from './ProjectCard';


const Project = () => {
  return (
    <section className={styles.container} id='projects'>
        <h2 className={styles.title}>Project</h2>
        <div className={styles.projects}>{
        projects.map((project, id) => {
            return <ProjectCard key={id} project={project}/>
        })}
        </div>
    </section>
  )
}

export default Project
