import { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex flex-column gap-3 justify-content-center align-items-center"
    >
      {/* El children es lo que se mostrara en el modal */}

      <div>Modales reutilizables con styled-components</div>
      <Modal
        closeModal={modal1}
        setcloseModal={setModal1}
        title="Desarrollando con React"
      >
        <div className="text-center">
          <h3>React.js</h3>
          <p>
            React es una biblioteca Javascript de código abierto diseñada para
            crear interfaces de usuario con el objetivo de facilitar el
            desarrollo de aplicaciones en una sola página. Es mantenido por
            Facebook y la comunidad de software libre. En el proyecto hay más de
            mil desarrolladores libres
          </p>
          <button className="btn btn-primary">Ver más</button>
        </div>
      </Modal>

      <Modal
        closeModal={modal2}
        setcloseModal={setModal2}
        title="Desarrollando con Node"
      >
        <div className="text-center">
          <h3>Node.js</h3>
          <p>
            Node.js es un entorno de servidor de código abierto multiplataforma
            que puede ejecutarse en Windows, Linux, Unix, macOS y más. Node.js
            es un entorno de tiempo de ejecución de JavaScript de back-end, se
            ejecuta en el motor de JavaScript V8 y ejecuta el código de
            JavaScript fuera de un navegador web.
          </p>
          <button className="btn btn-warning">Ver más</button>
        </div>
      </Modal>

      {/* Boton para mostrar el modal */}
      <div>
        <button
          className="btn btn-outline-primary m-2"
          onClick={() => setModal1(!modal1)}
        >
          Mostrar Modal 1
        </button>
        <button
          className="btn btn-outline-success m-2"
          onClick={() => setModal2(!modal2)}
        >
          Mostrar Modal 2
        </button>
      </div>
    </div>
  );
};

export default App;
