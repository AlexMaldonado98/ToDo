import { useState } from "react";

const Formulario = ({ clickAgregarTarea, borrarCompletas }) => {

    let [textoInput, setTextoInput] = useState('');

    const agregarTarea = (e) => {
        e.preventDefault();
        if(textoInput === ''){
            alert('Tienes que escribir una tarea')
        }else{
            clickAgregarTarea(textoInput);
            setTextoInput('');
        }
    }
    const borrarCompletados = (e) =>{
        e.preventDefault();
        borrarCompletas();

    }

    const capturarTexto = (e) => {
        setTextoInput(e.target.value)
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <input type="text" id="hola" className="form-control text-danger bg-info" placeholder="Tarea Nueva..."
                        value={textoInput} onChange={capturarTexto}
                    />
                </div>
                <div className="row">
                    <div className="col-7">
                        <button type="submit" className="btn btn-primary form-control" onClick={agregarTarea}>Agregar Tarea</button>

                    </div>
                    <div className="col-5">
                        <button className="btn btn-danger form-control" onClick={borrarCompletados} >Borrar Cumplidos</button>

                    </div>
                </div>

            </form>
        </>
    );
};

export default Formulario;