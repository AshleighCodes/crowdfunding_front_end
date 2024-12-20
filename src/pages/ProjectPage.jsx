import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import PledgeForm from "../components/PledgeForm";
import './ProjectPage.css';

function ProjectPage() {
    // Here we use a hook that comes for free in react router called `useParams` to get the id from the URL so that we can pass it to our useProject hook.
    const { id } = useParams();
    // useProject returns three pieces of info, so we need to grab them all here
    const { project, isLoading, error } = useProject(id);
    
    if (isLoading) {
        return (<p>loading...</p>)
    }
    
    if (error) {
        return (<p>{error.message}</p>)
    }

    return (
        <div className="project-page">
            <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <h3 className="project-created-at">Created at: {new Date(project.date_created).toLocaleString()}</h3>
                <h3 className="project-status">{`Status: ${project.is_open}`}</h3>
                <h3>Pledges:</h3>
                <ul className="project-pledges">
                    {project.pledges.map((pledgeData, key) => {
                        return (
                            <li key={key} className="pledge-item">
                                {pledgeData.amount} from {pledgeData.supporter}
                            </li>
                        );
                    })}
                </ul>
                <PledgeForm projectId={project.id} />
            </div>
            <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
            </div>
        </div>
    );
}

export default ProjectPage;