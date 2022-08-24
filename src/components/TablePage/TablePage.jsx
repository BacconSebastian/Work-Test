import React from "react";
import IndividualPage from "../IndividualPage/IndividualPage";

import { Table } from 'react-bootstrap';
import './TablePage.css'


const TablePage = () => {

    // Simula datos traidos de DB
    const people = [
        {
            nombre: "Pedro",
            edad: 20,
            carrera: "Ingenieria",
            hobbie: "Futbol"
        },
        {
            nombre: "Rodrigo",
            edad: 22,
            carrera: "Arquitectura",
            hobbie: "Bajo eléctrico"
        },
        {
            nombre: "Romina",
            edad: 21,
            carrera: "Arquitectura",
            hobbie: "Acrobacia"
        },
        {
            nombre: "Ana",
            edad: 23,
            carrera: "Contadora",
            hobbie: "Astronomia"
        },
    ]

    var id = 1

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Carrera</th>
                    <th>Hobbie</th>
                </tr>
            </thead>
            <tbody>
                {people.map(element => <IndividualPage id = {id++} name = {element.nombre} age = {element.edad} career = {element.carrera} hobbie = {element.hobbie} key = {id} />)}
            </tbody>
        </Table>
    );
}

export default TablePage;