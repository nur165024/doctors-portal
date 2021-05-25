import React from 'react';

const AdminAppointmentList = ({appointment,index}) => {
    const {name,date} = appointment;
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{name}</td>
            <td>{new Date().toDateString(date)}</td>
            <td><button className="btn btn-primary btn-setColor">Not Visited</button></td>
        </tr>
    );
};

export default AdminAppointmentList;