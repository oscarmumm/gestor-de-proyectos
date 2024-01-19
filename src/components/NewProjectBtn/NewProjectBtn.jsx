import './NewProjectBtn.css'

const NewProjectBtn = ({openCreationOptionsMenu}) => {
    const handleClick = () => {
        openCreationOptionsMenu();
    };
    return <button className='btn new-project__btn' onClick={handleClick}>Nuevo Proyecto</button>;
};

export default NewProjectBtn;
