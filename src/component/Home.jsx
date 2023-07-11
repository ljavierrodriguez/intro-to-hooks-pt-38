import React, { useEffect, useState } from 'react'

import './Home.css';

const AlertMessage = () => {

    useEffect(() => {
        // componentDidMount
        console.log("Componente Renderizado (AlertMessage)");

        return () => {
            // componentWillUnmount
            console.log("Componente va a ser eliminado (AlertMessage)");
        }

    }, []) // solo se ejecuta la primera vez que renderiza el componente

    return (
        <div className="alert alert-danger" role="alert">
            Esto es una alerta
        </div>
    )
}

export default function Home(props) {
    //let saludo = "Hola Mundo desde React"

    // const [value, function] = useState(initialValue);

    const [saludo, setSaludo] = useState("Hola Mundo desde React"); // [value, function(){}]
    const [edad, setEdad] = useState(10);
    const [persona, setPersona] = useState({
        name: 'John',
        lastname: 'Doe'
    })
    const [notas, setNotas] = useState([10, 10, 10, 10])
    const [show, setShow] = useState(false)

    const [counter, setCounter] = useState(0);

    const [email, setEmail] = useState("");

    const cambiarSaludo = (e) => {
        console.log(e.target)
        e.target.disabled = true;
        e.target.classList.remove('btn-primary');
        e.target.classList.add('btn-default')
        setSaludo("Chao nos vemos el miercoles");
        //props.name = "Pedro"
    }

    const cambiarFondo1 = (e) => {
        e.target.style.backgroundColor = "blue";
    }

    const cambiarFondo2 = (e) => {
        e.target.style.backgroundColor = "red";
    }


    useEffect(() => {
        console.log('Componente Renderizado');
    }, [])

    useEffect(() => {
        // componentDidUpdate
        console.log("Ocurrio un cambio en la variable show");
    }, [show])

    useEffect(() => {
        console.log("Valor: " + counter);
    }, [counter])

    return (
        <>
            <h1>{saludo} {props.name}</h1>
            <button className="btn btn-primary" onClick={cambiarSaludo}>Cambiar Saludo</button>

            <button className="btn btn-danger" onClick={() => {
                setShow(!show);
            }}>{show ? "Hide" : "Show"}</button>

            <div className="btn-group">
            <button className="btn btn-warning" onClick={() => setCounter(counter => counter + 1)}>+</button>
            <button className="btn btn-dark">{counter}</button>
            <button className="btn btn-warning" onClick={() => setCounter(counter => counter - 1)}>-</button>
            </div>

            <input type="email" onChange={(e) => {
                setEmail(e.target.value);
            }} />

            <div className="box" onMouseOver={cambiarFondo1} onMouseOut={cambiarFondo2}>

            </div>


            {
                show ? (
                    <AlertMessage />
                ): null
            }

            {/* 
        <div onClick={functionName}></div> 
        
        <div onClick={() => { 
            functionName()
        }}></div>

        <div onClick={() => functionName()}></div>
        
        */}
        </>
    )
}