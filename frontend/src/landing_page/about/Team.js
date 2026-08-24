import React from 'react';

function Team() {
    return ( 
        <div className='container px-3 px-md-5'>
            <div className='row p-2 p-md-3 mt-4 mt-md-5 border-top'>
                <h1 className='text-center fs-2 fs-md-1 mb-4 mb-md-5'>
                    People
                </h1>
                
                <div className='row p-2 p-md-3 text-muted' style={{ lineHeight: "1.8" }}>
                    {/* Founder Profile Column: Stacks full-width on mobile, 6-cols on desktop */}
                    <div className='col-12 col-md-6 p-3 text-center mb-4 mb-md-0'>
                        <img 
                            src='media/images/nithinKamath.jpg' 
                            alt='Nithin Kamath' 
                            className='img-fluid rounded-circle'
                            style={{ width: "60%", maxWidth: "230px" }}
                        />   
                        <h4 className='mt-4 fs-4 fs-md-3'>Nithin Kamath</h4>  
                        <h6 className='text-secondary'>Founder, CEO</h6>               
                    </div>

                    {/* Bio Text Column: Stacks below image on mobile, 6-cols on desktop */}
                    <div className='col-12 col-md-6 p-2 p-md-3 fs-6 fs-md-5 text-center text-md-start'>
                        <p>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p>
                        <p>
                            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>
                        <p>
                            Playing basketball is his zen.
                        </p>
                        <p>
                            Connect on <a href='#' style={{ textDecoration: "none" }}>Homepage</a> / <a href='#' style={{ textDecoration: "none" }}>TradingQnA</a> / <a href='#' style={{ textDecoration: "none" }}>Twitter</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;