import React from 'react';

function Brokerage() {
    return (
        <div className='container px-3 px-md-5'>
            <div className='row p-2 p-md-5 mt-4 mt-md-5 border-top align-items-start'>
                {/* Left Column: Brokerage Calculator & Rules (Full width on mobile, 8 cols on desktop) */}
                <div className='col-12 col-md-8 p-2 p-md-4 mb-4 mb-md-0'>
                    <a href='#' className='text-decoration-none d-block mb-3 text-center text-md-start'>
                        <h3 className='fs-5 text-primary'>Brokerage calculator</h3>
                    </a>
                    
                    <ul className='text-muted ps-3 pe-2' style={{ textAlign: "left", lineHeight: "2.0", fontSize: "0.85rem" }}>
                        <li className='mb-2'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li className='mb-2'>Digital contract notes will be sent via e-mail.</li>
                        <li className='mb-2'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li className='mb-2'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li className='mb-2'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li className='mb-2'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>

                {/* Right Column: List of Charges (Full width on mobile, 4 cols on desktop) */}
                <div className='col-12 col-md-4 p-2 p-md-4 text-center text-md-start'>
                    <a href='#' className='text-decoration-none'>
                        <h3 className='fs-5 text-primary'>List of charges</h3>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;