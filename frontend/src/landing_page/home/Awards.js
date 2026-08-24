import React from 'react';

function Awards() {
    return (
        <div className='container mt-3 mt-md-5 px-3'>
            <div className='row align-items-center'>
                {/* Image Column: Stacked full-width on mobile, half-width on desktop */}
                <div className='col-12 col-md-6 p-2 p-md-5 text-center'>
                    <img 
                        src='media/images/largestBroker.svg' 
                        alt='Broker panel' 
                        className='img-fluid'
                    />
                </div>

                {/* Content Column */}
                <div className='col-12 col-md-6 p-2 p-md-5 mt-3 mt-md-0'>
                    <h1 className='fs-2 fs-md-1 mb-3'>Largest stock broker in India</h1>
                    <p className='mb-4 text-muted fs-6 fs-md-5'>
                        1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>

                    {/* Lists Grid */}
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <ul className='ps-3'>
                                <li><p className='mb-2'>Futures and Options</p></li>
                                <li><p className='mb-2'>Commodity derivatives</p></li>
                                <li><p className='mb-2'>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul className='ps-3'>
                                <li><p className='mb-2'>Stocks & IPOs</p></li>
                                <li><p className='mb-2'>Direct mutual funds</p></li>
                                <li><p className='mb-2'>Bonds and Govt. Securities</p></li>
                            </ul> 
                        </div>
                    </div>

                    {/* Press Logos Image */}
                    <img 
                        src='media/images/pressLogos.png' 
                        alt='Press Logos' 
                        className='img-fluid mt-3' 
                        style={{ width: "90%", maxWidth: "100%" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Awards;