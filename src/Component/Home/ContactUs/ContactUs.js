import React from 'react';
import './ContactUs.css';
import { useForm } from "react-hook-form";
const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <section id="contactUs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center services-header-text">
                        <h5>Our Blog</h5>
                        <h2 style={{ color:'#fff' }}>Always Connect with us</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="contact-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-group">
                                    <input type="email" {...register("email",{ required: true })} name="email" className="form-control" id="email" placeholder="name@example.com *" />
                                    <p className="text-danger">{errors.email && "email is required"}</p>
                                </div>

                                <div class="form-group">
                                    <input type="text" {...register("subject",{ required: true })} name="subject" className="form-control" id="subject" placeholder="Subject *" />
                                    <p className="text-danger">{errors.subject && "subject is required"}</p>
                                </div>
                                
                                <div class="form-group">
                                    <textarea class="form-control" {...register("message",{ required: true })} name="message" placeholder="Your message *" id="message" rows="5"></textarea>
                                    <p className="text-danger">{errors.message && "message is required"}</p>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-setColor">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;