import {useEffect, useState} from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import ProjectCreationOptions from "../../components/ProjectCreationOptions/ProjectCreationOptions";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import "./Home.css";
import NewProjectBtn from "../../components/NewProjectBtn/NewProjectBtn";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import HomeMessage from "../../components/HomeMessage/HomeMessage";

const Home = () => {
    const {data, setData} = useContext(DataContext)
    const [projectCreation, setprojectCreation] = useState(false);
    const openCreationOptionsMenu = () => {
        setprojectCreation(true);
    };
    const closeCreationOptionsMenu = () => {
        setprojectCreation(false);
    };
    const checkData = () => {
        console.log(data)
    }

    useEffect(()=> {
        window.localStorage.setItem('data', JSON.stringify(data))
    }, [{data}])

    return (
        <div className="home">
            <MainHeader />
            {/* este boton es un helper para chequear el state de data */}
            {/* <button onClick={checkData}>Chequear data</button> */}
            <div className="home__body-container">
            <HomeMessage />
                {/* <div className="home__recent-projects-section">
                    <h3 className="home__recent-projects-section__title">Próximas tareas a vencer</h3>
                    <RecentProjects />
                </div> */}
                <div className="home__all-projects-section">
                    <NewProjectBtn
                        openCreationOptionsMenu={openCreationOptionsMenu}
                    />
                    {
                        data.projects.length > 0 ?
                        <h3 className="home__all-projects-section__title">Tus proyectos:</h3>
                        :
                        <h3 className="home__all-projects-section__title">No tienes proyectos guardados</h3>
                    }
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
