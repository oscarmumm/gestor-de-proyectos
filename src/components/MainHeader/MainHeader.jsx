import NewProjectBtn from "../NewProjectBtn/NewProjectBtn";
import main_logo from '../../assets/icons/table-of-contents-svgrepo-com.svg'
import "./MainHeader.css";

const MainHeader = ({openCreationOptionsMenu}) => {
    return (
        <header className="main-header">
            <div className="main-header__inner-container">
                <h1 className="main-header__title">MyProjects</h1>
                <img className="main-header__logo" src={main_logo} alt="" />
            </div>
        </header>
    );
};

export default MainHeader;
