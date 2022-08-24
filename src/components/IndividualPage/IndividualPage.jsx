import React from "react";

const IndividualPage = ({id, name, age, career, hobbie}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{career}</td>
            <td>{hobbie}</td>
        </tr>
    );
}

export default IndividualPage;