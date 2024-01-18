const NewProjectBtn = ({openCreationOptionsMenu}) => {
    const handleClick = () => {
        openCreationOptionsMenu();
    };
    return <button onClick={handleClick}>Nuevo Proyecto</button>;
};

export default NewProjectBtn;
