import React from 'react'

function Hero() {
    return (
        <div className='container px-3 px-md-5'>
            <div className='row py-4 py-md-5 mt-3 mt-md-5 mb-3 mb-md-5'>
                <h1 className='fs-4 fs-md-2 text-center text-muted lh-base'>
                    We pioneered the discount broking model in India. <br></br>
                    Now, we are breaking ground with our technology.
                </h1>
                <div className='row px-2 px-md-5 py-4 mt-4 mt-md-5 border-top text-muted' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                    <div className='col-12 col-md-6 p-2 p-md-4 fs-6 fs-md-5'>
                        <p>
                            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                        </p>
                        <p>
                            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                        </p>
                        <p>
                            Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                        </p>
                    </div>
                    <div className='col-12 col-md-6 p-2 p-md-4 fs-6 fs-md-5'>
                        <p>
                            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                        </p>
                        <p>
                            <a href='' style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                        </p>
                        <p>
                            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;