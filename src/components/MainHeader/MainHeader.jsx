import NewProjectBtn from "../NewProjectBtn/NewProjectBtn";
import "./MainHeader.css";

const MainHeader = ({openCreationOptionsMenu}) => {
    return (
        <header className="main-header">
            <div className="main-header__inner-container">
                <h1 className="main-header__title">Gestor de Proyectos</h1>
                <NewProjectBtn
                    openCreationOptionsMenu={openCreationOptionsMenu}
                />
            </div>
        </header>
    );
};

export default MainHeader;
