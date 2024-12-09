// import useProjects from "../hooks/use-projects";
// import ProjectCard from "../components/ProjectCard";
// import ProjectForm from "../components/ProjectForm";
// import "../pages/HomePage.css";

// function HomePage() {
//     const { projects } = useProjects();
//     return (
//         <div id="project-list">
//             {projects.map((projectData, key) => {
//                 return <ProjectCard key={key} projectData={projectData} />; 
//             })}
//             <ProjectForm />
//         </div>
//     );
// }

// export default HomePage;

import React from 'react';
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import "../pages/HomePage.css";

function HomePage() {
    const { projects } = useProjects();
    return (
        <div className="home-container">
            <h1 className="home-title">Our Projects</h1>
            <div className="project-list">
                {projects.map((projectData, key) => (
                    <ProjectCard key={key} projectData={projectData} />
                ))}
            </div>
            <ProjectForm />
        </div>
    );
}

export default HomePage;