import React from 'react';

const PrescriptionList = ({list,index}) => {
    const {created_at,name,phoneNumber} = list;
    console.log();
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{new Date().toDateString(created_at)}</td>
            <td>{name}</td>
            <td>+88{phoneNumber}</td>
            <td><button className="btn btn-primary btn-setColor">View</button></td>
        </tr>
    );
};

export default PrescriptionList;