import {useState} from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import ProjectCreationOptions from "../../components/ProjectCreationOptions/ProjectCreationOptions";
import ProjectsList from "../../components/ProjectsList/ProjectsList";

const Home = () => {
    const [projectCreation, setprojectCreation] = useState(false);
    const openCreationOptionsMenu = () => {
        setprojectCreation(true);
    };
    const closeCreationOptionsMenu = () => {
        setprojectCreation(false);
    };
    return (
        <div>
            <MainHeader
                openCreationOptionsMenu={openCreationOptionsMenu}
                
            />
            <ProjectsList />
            {projectCreation ? <ProjectCreationOptions closeCreationOptionsMenu={closeCreationOptionsMenu} /> : null}
        </div>
    );
};

export default Home;
