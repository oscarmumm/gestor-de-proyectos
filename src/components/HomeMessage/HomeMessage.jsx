import "./HomeMessage.css";

const HomeMessage = () => {
    return (
        <div className="home-message">
            <p>
                MyProjects es la demo de una web app de gestión de proyectos.
                Te permite crear nuevos proyectos, dividiendolos por etapas, y
                asignando tareas, que luego podrás mover entre las etapas.
            </p>
            <br />
            <p>
                La información que maneja esta app se guardará en el local storage de tu navegador. Si deseas puedes instalar la app en tu dispositivo.
            </p>
        </div>
    );
};

export default HomeMessage;
