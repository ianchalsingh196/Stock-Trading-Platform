import React from 'react';

function Stats() {
    return (
        <div className='container px-3 px-md-5 my-4 my-md-5'>
            <div className='row align-items-center'>
                {/* Left Column: Text Section */}
                <div className='col-12 col-md-6 p-2 p-md-4 text-center text-md-start'>
                    <h1 className='fs-2 mb-4 fw-semibold'>Trust with confidence</h1>
                    
                    <h2 className='fs-5 mt-4 fw-semibold'>Customer-first always</h2>
                    <p className='text-muted fs-6'>
                        That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.
                    </p>

                    <h2 className='fs-5 mt-4 fw-semibold'>No spam or gimmicks</h2>
                    <p className='text-muted fs-6'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                    </p>

                    <h2 className='fs-5 mt-4 fw-semibold'>The Zerodha universe</h2>
                    <p className='text-muted fs-6'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h2 className='fs-5 mt-4 fw-semibold'>Do better with money</h2>
                    <p className='text-muted fs-6'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>

                {/* Right Column: Image and Links */}
                <div className='col-12 col-md-6 p-2 p-md-4 text-center mt-4 mt-md-0'>
                    <img 
                        src='media/images/ecosystem.png' 
                        alt='Zerodha Ecosystem' 
                        className='img-fluid mb-4' 
                        style={{ maxWidth: "90%" }} 
                    />
                    
                    <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 gap-sm-4'>
                        <a href='#' className='text-decoration-none'>
                            Explore our products <i className="fa-solid fa-arrow-right-long ms-1"></i>
                        </a>
                        <a href='#' className='text-decoration-none'>
                            Try Kite demo <i className="fa-solid fa-arrow-right-long ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;