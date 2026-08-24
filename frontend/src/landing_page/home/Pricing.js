import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-5 px-3'>
            <div className='row align-items-center'>
                {/* Left Column: Heading and Text */}
                <div className='col-12 col-md-5 mb-4 mb-md-0 text-center text-md-start'>
                    <h1 className='mb-3 fs-3 fs-md-2'>Unbeatable pricing</h1>
                    <p className='text-muted fs-6'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='#' style={{ textDecoration: "none" }}>
                        See pricing <i className="fa-solid fa-arrow-right-long ms-1"></i>
                    </a>
                </div>

                {/* Empty spacer column for larger screens */}
                <div className='d-none d-md-block col-md-1'></div>

                {/* Right Column: Pricing Cards */}
                <div className='col-12 col-md-6'>
                    <div className='row text-center g-3'>
                        <div className='col-12 col-sm-6'>
                            <div className='p-3 border rounded h-100'>
                                <h1 className='mb-2 display-6 fw-bold'>₹0</h1>
                                <p className='text-muted mb-0 fs-6'>
                                    Free equity delivery and <br className='d-none d-sm-block' /> direct mutual funds
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='p-3 border rounded h-100'>
                                <h1 className='mb-2 display-6 fw-bold'>₹20</h1>
                                <p className='text-muted mb-0 fs-6'>
                                    Intraday and F&O
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;