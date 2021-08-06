import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form className="row g-3 shadow">
                            <div className="col-md-7 offset-2">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-7 offset-2">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-md-7 offset-2">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="inputPassword5" />
                            </div>
                            <div className="col-12 offset-2 mb-2">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact