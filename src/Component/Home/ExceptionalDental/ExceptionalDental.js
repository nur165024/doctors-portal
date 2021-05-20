import React from 'react';
import './ExceptionalDental.css';
import ExceptionalDentalImage from '../../../images/ExceptionalDental.png';

const ExceptionalDental = () => {
    return (
        <section id="ExceptionalDental">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={ExceptionalDentalImage} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 align-self-center">
                        <div className="services-text-content">
                            <h2>Exceptional Dental <br /> Care, on Your Terms</h2>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi libero nam, aliquam quas nihil corrupti iure ullam iusto voluptate natus iste nesciunt eos pariatur cumque dolorem repudiandae unde beatae repellendus, obcaecati earum deserunt fugit enim. Veritatis sunt natus eius, ipsum ab reprehenderit quasi iste asperiores. Quisquam eligendi autem nihil molestias odio expedita cupiditate tempore eveniet harum. Quas amet expedita facilis doloremque, culpa, hic omnis ipsa aspernatur deleniti ullam consectetur perferendis eligendi laborum excepturi placeat vitae aperiam, et cumque consequatur exercitationem quidem quos. In itaque voluptas illum quidem, consequuntur veritatis quis minus nesciunt cum. Sed, non. Doloremque sapiente consectetur minima! Dicta.</p>
                            <button className="btn btn-primary btn-setColor">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExceptionalDental;