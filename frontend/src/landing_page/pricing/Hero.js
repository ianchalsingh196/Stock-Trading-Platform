import React from 'react';

function Hero() {
    return (
        <div className='container px-3 px-md-5'>
            {/* Page Header */}
            <div className='row py-4 py-md-5 mt-3 mt-md-5 border-bottom text-center'>
                <h1 className='fs-2 fs-md-1 fw-bold'>Pricing</h1>
                <h3 className='text-muted fs-6 fs-md-5 mt-2 mt-md-3'>
                    Free equity investments and flat ₹20 intraday and F&O trades
                </h3>
            </div>

            {/* 3-Column Feature Cards */}
            <div className='row py-4 py-md-5 mt-2 mt-md-3 text-center g-4'>
                {/* Equity Card */}
                <div className='col-12 col-md-4 p-3'>
                    <img 
                        src='media/images/pricingEquity.svg' 
                        alt='Free equity delivery' 
                        className='img-fluid mb-3' 
                        style={{ maxWidth: "200px" }}
                    />
                    <h2 className='fs-4 fw-semibold mt-2'>Free equity delivery</h2>
                    <p className='text-muted fs-6 mt-3'>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                {/* Intraday Card */}
                <div className='col-12 col-md-4 p-3'>
                    <img 
                        src='media/images/intradayTrades.svg' 
                        alt='Intraday and F&O trades' 
                        className='img-fluid mb-3' 
                        style={{ maxWidth: "200px" }}
                    />
                    <h2 className='fs-4 fw-semibold mt-2'>Intraday and F&O trades</h2>
                    <p className='text-muted fs-6 mt-3'>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>

                {/* Mutual Funds Card */}
                <div className='col-12 col-md-4 p-3'>
                    <img 
                        src='media/images/pricingEquity.svg' 
                        alt='Free direct mutual funds' 
                        className='img-fluid mb-3' 
                        style={{ maxWidth: "200px" }}
                    />
                    <h2 className='fs-4 fw-semibold mt-2'>Free direct MF</h2>
                    <p className='text-muted fs-6 mt-3'>
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    ); 
}

export default Hero;