import './NewProjectBtn.css'

const NewProjectBtn = ({openCreationOptionsMenu}) => {
    const handleClick = () => {
        openCreationOptionsMenu();
    };
    return <button className='btn new-project__btn' onClick={handleClick}>Crear Proyecto</button>;
};

export default NewProjectBtn;
