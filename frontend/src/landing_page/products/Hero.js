import React from 'react';

function Hero() {
    return (
        <div className='container border-bottom mb-4 mb-md-5 px-3'>
            <div className='text-center mt-4 mt-md-5 py-3 px-2'>
                <h1 className='text-muted fs-2 fs-md-1 fw-bold'>Technology</h1>
                <h2 className='text-muted mt-2 mt-md-3 fs-5 fs-md-4 fw-normal'>
                    Sleek, modern, and intuitive trading platforms
                </h2>
                <p className='mt-3 mb-4 mb-md-5 fs-6'>
                    Check out our{' '}
                    <a href='#' className='text-decoration-none'>
                        investment offerings <i className="fa-solid fa-arrow-right-long ms-1"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Hero;