import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from "./Component/Appointment/Appointment/Appointment";
import AdminAppointment from "./Component/Dashboard/AdminAppointment/AdminAppointment";
import AdminPatient from "./Component/Dashboard/AdminPatient/AdminPatient";
import AdminPrescription from "./Component/Dashboard/AdminPrescription/AdminPrescription";
import Dashboard from "./Component/Dashboard/Dashboard/Dashboard";
import Home from "./Component/Home/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/admin/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/admin/appointment">
          <AdminAppointment></AdminAppointment>
        </Route>
        <Route path="/admin/patient">
          <AdminPatient></AdminPatient>
        </Route>
        <Route path="/admin/patient">
          <AdminPatient></AdminPatient>
        </Route>
        <Route path="/admin/prescription">
          <AdminPrescription></AdminPrescription>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
