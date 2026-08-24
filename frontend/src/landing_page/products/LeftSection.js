import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className='container mt-4 mt-md-5 px-3'>
            <div className='row align-items-center'>
                {/* Product Image: Full width on mobile, 6 columns on desktop */}
                <div className='col-12 col-md-6 text-center mb-4 mb-md-0'>
                    <img 
                        src={imageURL} 
                        alt={productName || 'Product'} 
                        className='img-fluid' 
                    />
                </div>

                {/* Content Section */}
                <div className='col-12 col-md-6 p-2 p-md-4 text-center text-md-start'>
                    <h1 className='fs-2 fs-md-1 fw-bold'>{productName}</h1>
                    <p className='text-muted fs-6 mt-3'>{productDescription}</p>

                    {/* Action Links Container (Flexbox instead of fixed inline margins) */}
                    <div className='d-flex flex-wrap justify-content-center justify-content-md-start gap-4 my-3'>
                        {tryDemo && (
                            <a href={tryDemo} className='text-decoration-none'>
                                Try Demo <i className="fa-solid fa-arrow-right-long ms-1"></i>
                            </a>
                        )}
                        {learnMore && (
                            <a href={learnMore} className='text-decoration-none'>
                                Learn More <i className="fa-solid fa-arrow-right-long ms-1"></i>
                            </a>
                        )}
                    </div>

                    {/* App Badges Container */}
                    <div className='d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-3 mt-4'>
                        {googlePlay && (
                            <a href={googlePlay}>
                                <img src='media/images/googlePlayBadge.svg' alt='Get it on Google Play' className='img-fluid' />
                            </a>
                        )}
                        {appStore && (
                            <a href={appStore}>
                                <img src='media/images/appstoreBadge.svg' alt='Download on App Store' className='img-fluid' />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;