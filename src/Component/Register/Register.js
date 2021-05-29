import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import firebaseConfig from '../Login/Firebase';
import loginImage from '../../images/login-image.png';
import './Register.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Register = () => {
    const [errorMessage, setErrorMessage] = useState(true);

    const [userRegister,setUserRegister] = useState({
        error: '',
        status : false,
    });

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const {email,password} = data;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            setUserRegister({
                error: errorMessage,
                status : true,
            });
            console.log(errorMessage);
        });
    }

    const handleErrorMessage = () => {
        setErrorMessage(false);
    }

    return (
        <section id="userLogin">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <h2 className="text-center mb-5 text-secondary">User Register</h2>
                        {
                            errorMessage &&  
                            userRegister.status === true && 
                                <div class="alert alert-danger alert-dismissible">
                                    <button onClick={handleErrorMessage} type="button" class="close" data-dismiss="alert">&times;</button>
                                    <strong id="userRegisterMessage">{userRegister.error}</strong>
                                </div>
                        }
                        
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">
                                <label htmlFor="user_name">Name</label>
                                <input type="text" {...register('user_name', {required:true})} autoFocus name="user_name" class="form-control" id="user_name" placeholder="Name" />
                                <p className="text-danger">{errors.user_name && "Email is required"}</p>
                            </div>

                            <div class="form-group">
                                <label htmlFor="email">User Email</label>
                                <input type="email" {...register('email', {required:true})} name="email" class="form-control" id="email" placeholder="User Email" />
                                <p className="text-danger">{errors.email && "Email is required"}</p>
                            </div>

                            <div class="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" {...register('password', {required:true})} name="password" class="form-control" id="password" placeholder="Password" />
                                <p className="text-danger">{errors.password && "Password is required"}</p>
                            </div>
                            
                            <button type="submit" class="btn btn-primary btn-block btn-setColor mt-4">Submit</button>
                            <Link className="text-danger text-center d-block" to="/login">Login</Link>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="login-image">
                            <img src={loginImage} alt="login-image" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;