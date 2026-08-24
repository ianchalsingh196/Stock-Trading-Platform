import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container px-3 py-4 p-md-5 mb-3 mb-md-5'>
            <div className='row text-center justify-content-center'>
                <div className='col-12 col-md-10 col-lg-8'>
                    {/* Hero Image with responsive scaling */}
                    <img 
                        src='media/images/homeHero.png' 
                        alt='HomePage Hero Banner' 
                        className='img-fluid mb-4' 
                    />
                    
                    {/* Responsive Heading */}
                    <h1 className='mt-3 fs-2 fs-md-1 fw-semibold'>Invest in everything</h1>
                    
                    {/* Responsive Paragraph */}
                    <p className='text-muted fs-6 fs-md-5 mt-2 mb-4'>
                        Online platform to invest in stocks, derivatives, mutual funds, and more
                    </p>
                    
                    {/* Signup Button: Flexible width across devices */}
                    <Link 
                        to="/signup" 
                        className="btn btn-primary fs-5 py-2 col-10 col-sm-6 col-md-4 col-lg-3 mx-auto mb-4" 
                        style={{ textDecoration: "none" }}
                    >
                        Signup Now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;