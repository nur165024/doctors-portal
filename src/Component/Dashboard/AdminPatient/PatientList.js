import React from 'react';

const PatientList = ({list,index}) => {
    const {name,gender,age,weight,phoneNumber} = list;
    
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{age}</td>
            <td>{weight} kg</td>
            <td>+88{phoneNumber}</td>
            <td>Panthopath, Green Road, Dhaka-1205.</td>
        </tr>
    );
};

export default PatientList;