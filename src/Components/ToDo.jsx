import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import ToDoList from "./ToDoList";

const KEY = 'todoApp.tareas';

function ToDO() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem(KEY));
    if (datos) {
      setTareas(datos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(tareas));
  }, [tareas]);


  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const reactBeautiful = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }
    setTareas((listado) => reorder(listado,source.index,destination.index)    /* (prevTasks) => reorder(prevTasks, source.index, destination.index) */);
  };

  const agregarTarea = (tarea) => {
    setTareas([...tareas, { id: Date.now(), task: tarea, completed: false }])
  };

  const cambiarEstadoCompletado = (idP) => {
    const newTareas = [...tareas];
    const tareasCumplida = newTareas.find((e) => e.id === idP);
    tareasCumplida.completed = !tareasCumplida.completed;
    setTareas(newTareas);
  }

  const borrarCompletas = () => setTareas(tareas.filter(e => !e.completed));


  return (
    <>
      <div className="container w-50 my-4 text-primary border border-danger">
        <div className="container my-4">

          <Formulario clickAgregarTarea={agregarTarea} borrarCompletas={borrarCompletas} />


          <ToDoList tareas={tareas} weon={cambiarEstadoCompletado} hermoso={reactBeautiful} />

          <h5 className="text-center mt-4 " >
            {`Tienes ${tareas.filter(e => e.completed === false).length} por completar`}
          </h5>
        </div>
      </div>
    </>
  )
}

export default ToDO;