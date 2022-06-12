import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const ToDoList = ({ tareas, weon, hermoso }) => {
    const cambiarCumplido = (id) => {
        weon(id)
    }

    return (
        <DragDropContext
            onDragEnd={(result) => {
                hermoso(result);
            }}
        >
            <Droppable droppableId="tasks">
                {(droppableProvided) => (
                    <ul
                        {...droppableProvided.droppableProps}
                        ref={droppableProvided.innerRef}
                        className="list-group"
                    >
                        {tareas.map(({ id, task, completed }, index) => (
                            <Draggable key={id} draggableId={id.toString()} index={index}>
                                {(draggableProvided) => (
                                    <li
                                        {...draggableProvided.draggableProps}
                                        ref={draggableProvided.innerRef}
                                        {...draggableProvided.dragHandleProps}
                                        className={completed ? 'list-group-item completed' : 'list-group-item'}
                                        onClick={() => cambiarCumplido(id)}>
                                        {task}
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {droppableProvided.placeholder}
                    </ul>

                )}

            </Droppable>
        </DragDropContext>
    )
}


export default ToDoList;