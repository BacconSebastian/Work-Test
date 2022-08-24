import React, { useState } from "react";

import { Form, Button } from 'react-bootstrap';
import './FormPage.css'


const FormPage = () => {
    
    const [text, setText] = useState()
    const [secret, setSecret] = useState()
    
    const control = document.getElementById('control')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("El texto contiene: " + (text ? text : "nada :(") + "\nY el texto secreto contiene: " + (secret ? secret : "nada :("))
    }
    
    const handleSecret = (e) => {
        setSecret(e.target.value)
        if(control){
            if (/[A-Z]/.test(e.target.value)){
                control.className = ''
            } else {
                control.className = 'active'
            }
        }
    }

    return (
        <div className="form-page">
            <Form className="form" onSubmit={handleSubmit}>
                <h1>Formulario controlado</h1>
                <Form.Group className="mb-3">
                    <Form.Label>Texto:</Form.Label>
                    <Form.Control onChange={e => setText(e.target.value)} name="textRandom" type="text" placeholder="Enter a random text..." />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Secret Text:</Form.Label>
                    <Form.Control onChange={handleSecret} name="secretRandom" type="password" placeholder="Enter other random text..." />
                </Form.Group>
                <p id="control">Escribí una mayúscula...</p>

                <Button variant="primary" type="submit">Mostrar</Button>
            </Form>
            <p>Tambien lo muestro por consola cuando se hace el submit!</p>
        </div>
        
    );
}

export default FormPage;