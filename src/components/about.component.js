import React from "react";
import { Link } from "react-router-dom";

function AboutComponent() {
    return (
        <>
            <div className='row text-center text-lg-start justify-content-md-center mt-5' id='profile'>
                <div className="col">
                    <div className="mb-4 h-100 float-right mt-35">
                        <h1 className='fw-bold font-tm text-center text-lg-start color-drk-blk'>Vaishnavi Jayapalan</h1>
                        <h2 className='fw-bold font-tm text-center text-lg-start color-lg-blk'>Software Developer - FullStack</h2>
                        <p className='font-sm-text'>vaishujayapalan@gmail.com</p>
                        <span>
                            <Link to='https://github.com/Vaishnavi-Jayapalan?tab=repositories' target='blank'>
                            <img className='img-logo' src='image/github.png' alt='Github' />
                            </Link>
                            <Link to='https://www.linkedin.com/in/vaishnavi-jayapalan-91897721b/' target='blank'>
                            <img className='img-logo' src='image/linkedin2.png' alt='Linkedin' />
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="col">
                    <div className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail resize-img-thumbnail" itemProp="thumbnail" src='image/photo.jpeg' alt="Vaishnavi Jayapalan" />
                    </div>
                </div>
            </div>
            <div className='row mt-5' id='about'>
                <p className='font-lg-text color-lg-blk'>
                    Experienced as Full Stack Developer in designing, implementing, and integrating web applications in both front-end and back-end technologies. Proficient in back-end technologies like PHP, Python, NodeJS and databases such as MySQL, Postgres, MongoDB and adept front-end technologies like ReactJS with Redux and Hooks.
                </p>
                <p className='font-lg-text color-lg-blk'>
                    In addition to technical skills, I possess a keen problem solving skills and collaborative teamwork which makes as a valuable asset for delivering project's success.
                </p>
            </div>
        </>
    );
}

export default AboutComponent