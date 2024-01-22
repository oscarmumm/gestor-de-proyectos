import {useState} from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import ProjectCreationOptions from "../../components/ProjectCreationOptions/ProjectCreationOptions";
import RecentProjects from "../../components/RecentProjects/RecentProjects";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import "./Home.css";
import NewProjectBtn from "../../components/NewProjectBtn/NewProjectBtn";

const Home = () => {
    const [projectCreation, setprojectCreation] = useState(false);
    const openCreationOptionsMenu = () => {
        setprojectCreation(true);
    };
    const closeCreationOptionsMenu = () => {
        setprojectCreation(false);
    };
    return (
        <div className="home">
            <MainHeader />
            <div className="home__body-container">
                <div className="home__recent-projects-section">
                    <h3 className="home__recent-projects-section__title">Próximas tareas a vencer</h3>
                    <RecentProjects />
                </div>
                <div className="home__all-projects-section">
                    <NewProjectBtn
                        openCreationOptionsMenu={openCreationOptionsMenu}
                    />
                    <h3 className="home__all-projects-section__title">Tus proyectos:</h3>
                    <div className="home__all-projects-section__projects-list">
                        <ProjectsList />
                    </div>
                </div>
            </div>
            {projectCreation ? (
                <ProjectCreationOptions
                    closeCreationOptionsMenu={closeCreationOptionsMenu}
                />
            ) : null}
        </div>
    );
};

export default Home;
