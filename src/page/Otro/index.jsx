/*
Crear componente que va mostrar 3 botonos con los nombre rojo, azual y amarillo.
Si yo hago click en el rojo me va a mostrar el cuadro rojo
Si yo hago click en el azul me va a mostrar el cuadro azul
Si yo hago click en el amarillo me va a mostrar el cuadro amarillo
*/

import { useState } from "react";
import './style.css';

const Block = () => {
    
    const [show, setShow] = useState(0)

    const handleShow = (cod) => {
        setShow(cod)
    }

    return (
        <div>
            <h1>Hola mundo</h1>
            <button onClick={() => handleShow(1)} > Rojo</button> <br />
            <button onClick={() => handleShow(2)} > Azul</button> <br />
            <button onClick={() => handleShow(3)} > Amarillo</button> <br />
            <br />
            <h2>{show}</h2>
            {
                show === 1 && (
                    <div className="cuadradoRojo"></div>
                )
            }
            {
                show === 2 && (
                    <div className="cuadradoAzul"></div>
                )
            }
            {
                show === 3 && (
                    <div className="cuadradoAmarillo"></div>
                )
            }
        </div>
    )
}

export default Block