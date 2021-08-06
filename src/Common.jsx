import React from 'react'
import { NavLink } from 'react-router-dom';
const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg ">
                <div className="row">
                    <div className="col-10 mx-auto"> 
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-5 order-lg-1 d-flex justify-content-center flex-column">
                                <h1> {props.name} <strong className="bg-success text-white">React&Django</strong></h1>
                                <h3 className="my-3 success">
                                   {props.contentname}
                                </h3>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn btn-primary">
                                        Get Started
                                    </NavLink>
                                </div>
                            </div> 
                            <div className="col-lg-6 order-1 order-lg-2 header-img mt-5">
                                <img src={props.imgsrc} className="img-fluid" alt="home img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default Common