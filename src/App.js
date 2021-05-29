import React, { createContext, useState } from "react";
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
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Register from "./Component/Register/Register";

export const UserLoginContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserLoginContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <PrivateRoute path="/admin/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/admin/appointment">
            <AdminAppointment></AdminAppointment>
          </PrivateRoute>
          <PrivateRoute path="/admin/patient">
            <AdminPatient></AdminPatient>
          </PrivateRoute>
          <PrivateRoute path="/admin/patient">
            <AdminPatient></AdminPatient>
          </PrivateRoute>
          <PrivateRoute path="/admin/prescription">
            <AdminPrescription></AdminPrescription>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </UserLoginContext.Provider>
  );
}

export default App;
