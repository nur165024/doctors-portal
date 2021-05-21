import React from 'react';
import './OurBlog.css';
import nureAlam from '../../../images/hello.png';
import hi from '../../../images/hi.png';
import china from '../../../images/china.png';
import OurBlogInfo from '../OurBlogInfo/OurBlogInfo';

const blogdata = [
    {
        id: 1,
        image : nureAlam,
        name : 'Rashed Kabir',
        date : '22 Aug 2018',
        title: 'check at least a doctor in a year for your teeth',
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio nemo doloremque, quas autem laudantium repellendus at mollitia iusto quam vel animi assumenda nesciunt omnis incidunt adipisci. Tenetur, animi corrupti!'
    },
    {
        id: 2, 
        image : hi,
        name : 'Dr. Caudi',
        date : '22 April 2019',
        title: '2 times of brush in a day can keep your healthy',
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio nemo doloremque, quas autem laudantium repellendus at mollitia iusto quam vel animi assumenda nesciunt omnis incidunt adipisci. Tenetur, animi corrupti!'
    },
    {
        id: 3,
        image : china,
        name : 'Rashed Kabir',
        date : '22 Aug 2020',
        title: 'check at least a doctor in a year for your teeth',
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio nemo doloremque, quas autem laudantium repellendus at mollitia iusto quam vel animi assumenda nesciunt omnis incidunt adipisci. Tenetur, animi corrupti!'
    },
]

const OurBlog = () => {
    return (
        <section id="ourBlog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center services-header-text">
                        <h5>Our Blog</h5>
                        <h2>From our blog news</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        blogdata.map(blog => <OurBlogInfo key={blog.id} blogInfo={blog}></OurBlogInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurBlog;