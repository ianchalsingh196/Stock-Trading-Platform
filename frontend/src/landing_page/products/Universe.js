import React from 'react'

function Universe() {
    return <div className='container mt-5'>
        <div className='row text-center'>
            <h1>
                The Zerodha Universe
            </h1>
            <p className='mt-3 fs-5'>
                Extend your trading and investment experience even further with our partner platforms
            </p>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/smallcaseLogo.png" alt='' style={{width:"40%"}} />
                <p className='text-muted text-small'>
                    Thematic investment platform
                </p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/streakLogo.png" alt='' style={{width:"40%"}}  />
                <p className='text-muted text-small'>
                    Algo & strategy platform
                </p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/sensibullLogo.svg" alt='' style={{width:"60%"}}  />
                <p className='text-muted text-small'>
                    Options trading platform
                </p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/smallcaseLogo.png" alt=''style={{width:"40%"}}  />
                <p className='text-muted text-small'>
                    Asset management
                </p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/smallcaseLogo.png" alt='' style={{width:"40%"}} />
                <p className='text-muted text-small'>
                    Fundamental research platform
                </p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/dittoLogo.png" alt='' style={{width:"40%"}} />
                <p className='text-muted text-small'>
                    Insurance
                </p>
            </div>
            <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
        </div>
    </div>;
}

export default Universe;