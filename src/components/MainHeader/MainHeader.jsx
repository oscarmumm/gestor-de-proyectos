import NewProjectBtn from "../NewProjectBtn/NewProjectBtn";

const MainHeader = ({openCreationOptionsMenu}) => {
    return (
        <header>
            <h1>Gestor de Proyectos</h1>
            <NewProjectBtn openCreationOptionsMenu={openCreationOptionsMenu} />
        </header>
    );
};

export default MainHeader;
