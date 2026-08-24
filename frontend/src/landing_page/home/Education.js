import React from 'react';

function Education() {
    return ( 
        <div className='container mt-4 mt-md-5 px-3'>
            <div className='row align-items-center'>
                {/* Image Column: Full width on mobile, 6-cols on desktop */}
                <div className='col-12 col-md-6 text-center mb-4 mb-md-0'>
                    <img 
                        src='media/images/education.svg' 
                        alt='Education Illustration' 
                        className='img-fluid'
                        style={{ width: "80%", maxWidth: "400px" }}
                    />
                </div>

                {/* Content Column */}
                <div className='col-12 col-md-6 text-center text-md-start'>
                    <h1 className='mb-3 fs-3 fs-md-2'>Free and open market education</h1>
                    
                    <p className='mt-3 mt-md-4 text-muted fs-6'>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href='#' className='d-inline-block mb-4' style={{ textDecoration: "none" }}>
                        Varsity <i className="fa-solid fa-arrow-right-long ms-1"></i>
                    </a>

                    <p className='mt-3 text-muted fs-6'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href='#' className='d-inline-block' style={{ textDecoration: "none" }}>
                        Trading Q&A <i className="fa-solid fa-arrow-right-long ms-1"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;