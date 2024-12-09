// // FOR ASH NEW

// import { useState } from "react";
// import postProject from "../api/post-project.js";

// function ProjectForm() {
//     const [projectData, setProjectData] = useState({
//         title: "",
//         description: "",
//         goal: 0,
//         image: "",
//         isOpen: true,
//         dateCreated: "",
//     });
//     const handleChange = (event) => {
//         const { id, value, type, checked } = event.target;
//         setProjectData((prevProjectData) => ({
//             ...prevProjectData,
//             [id]: type === "checkbox" ? checked : value,
//         }));
//     };
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const { title, description, goal, image, isOpen, dateCreated } =
//         projectData;
//         if (title && description && goal > 0) {
//             try {
//                 const response = await postProject(
//                     title,
//                     description,
//                     goal,
//                     image,
//                     isOpen,
//                     dateCreated
//                 );
//                 alert("Congratulations!! Your project has been created.");
//                 console.log("Project response:", response);
                
//                 setProjectData({
//                     title: "",
//                     description: "",
//                     goal: 0,
//                     image: "",
//                     isOpen: true,
//                     dateCreated: "",
//                 });
//             } catch (error) {
//                 console.error("Error during project creation:", error.message);
//                 // alert("Failed to create project. Please try again.");
//                 }
//             } else {
//                 alert("Please fill in all required fields (title, description, and goal)."
//                 );
//             }
//         };
//         return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="title">Title:</label>
//                 <input
//                 type="text"
//                 id="title"
//                 placeholder="Enter project title"
//                 value={projectData.title}
//                 onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="description">Description:</label>
//                 <textarea
//                 id="description"
//                 placeholder="Enter project description"
//                 value={projectData.description}
//                 onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="goal">Goal:</label>
//                 <input
//                 type="number"
//                 id="goal"
//                 placeholder="Enter funding goal"
//                 value={projectData.goal}
//                 onChange={handleChange}
//                 min="1"
//                 />
//             </div>
//             <div>
//                 <label htmlFor="image">Image URL:</label>
//                 <input
//                 type="text"
//                 id="image"
//                 placeholder="Enter image URL"
//                 value={projectData.image}
//                 onChange={handleChange}
//                 />
//                 </div>
//                 <div>
//                     <label htmlFor="isOpen">
//                         <input
//                         type="checkbox"
//                         id="isOpen"
//                         checked={projectData.isOpen}
//                         onChange={handleChange}
//                         />
//                         Project is open for pledges
//                     </label>
//                 </div>
//                 <div>
//                     <label htmlFor="dateCreated">Date Created:</label>
//                     <input
//                     type="datetime-local"
//                     id="dateCreated"
//                     value={projectData.dateCreated}
//                     onChange={handleChange}
//                     />
//                 </div>
//                 <button type="submit">Create Project</button>
//         </form>
//         );
//     }
// export default ProjectForm;

import { useState } from "react";
import postProject from "../api/post-project.js";
import './ProjectForm.css';

function ProjectForm() {
    const [projectData, setProjectData] = useState({
        title: "",
        description: "",
        goal: 0,
        image: "",
        isOpen: true,
        dateCreated: "",
    });

    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        setProjectData((prevProjectData) => ({
            ...prevProjectData,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { title, description, goal, image, isOpen, dateCreated } = projectData;
        if (title && description && goal > 0) {
            try {
                const response = await postProject(
                    title,
                    description,
                    goal,
                    image,
                    isOpen,
                    dateCreated
                );
                alert("Congratulations!! Your project has been created.");
                console.log("Project response:", response);
                
                setProjectData({
                    title: "",
                    description: "",
                    goal: 0,
                    image: "",
                    isOpen: true,
                    dateCreated: "",
                });
            } catch (error) {
                console.error("Error during project creation:", error.message);
            }
        } else {
            alert("Please fill in all required fields (title, description, and goal).");
        }
    };

    return (
        <div className="project-form-container">
            <h2 className="project-form-title">Enter project title</h2>
            <form onSubmit={handleSubmit}>
                <div className="project-form-field">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter project title"
                        value={projectData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="project-form-field">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        placeholder="Enter project description"
                        value={projectData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="project-form-field">
                    <label htmlFor="goal">Goal:</label>
                    <input
                        type="number"
                        id="goal"
                        placeholder="Enter funding goal"
                        value={projectData.goal}
                        onChange={handleChange}
                        min="1"
                    />
                </div>
                <div className="project-form-field">
                    <label htmlFor="image">Image URL:</label>
                    <input
                        type="text"
                        id="image"
                        placeholder="Enter image URL"
                        value={projectData.image}
                        onChange={handleChange}
                    />
                </div>
                <div className="project-form-field">
                    <label htmlFor="isOpen">
                        <input
                            type="checkbox"
                            id="isOpen"
                            checked={projectData.isOpen}
                            onChange={handleChange}
                        />
                        Project is open for pledges
                    </label>
                </div>
                <div className="project-form-field">
                    <label htmlFor="dateCreated">Date Created:</label>
                    <input
                        type="datetime-local"
                        id="dateCreated"
                        value={projectData.dateCreated}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="project-form-submit">Create Project</button>
            </form>
        </div>
    );
}

export default ProjectForm;