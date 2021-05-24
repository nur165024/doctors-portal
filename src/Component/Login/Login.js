import React from 'react';
import { useForm } from "react-hook-form";
import loginImage from '../../images/login-image.png';
import './Login.css';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section id="userLogin">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <h2 className="text-center mb-5 text-secondary">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">
                                <label htmlFor="email">User Email</label>
                                <input type="email" {...register('email', {required:true})} name="email" class="form-control" id="email" placeholder="User Email" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" {...register('password', {required:true})} name="password" class="form-control" id="password" placeholder="Password" />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block btn-setColor">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="login-image">
                            <img src={loginImage} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;