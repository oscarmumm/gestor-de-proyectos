import "./HomeMessage.css";

const HomeMessage = () => {
    return (
        <div className="home-message">
            <p>
                MyProjects es la demo de una aplicación de gestión de proyectos.
                Te permite crear nuevos proyectos, dividiendolos por etapas, y
                asignando tareas, que luego podrás mover entre las etapas.
            </p>
            <br />
            <p>
                Atención! La información de los proyectos que crees se eliminará
                al cerrar la pestaña, ya que solo se trata de una demostración.
            </p>
        </div>
    );
};

export default HomeMessage;
