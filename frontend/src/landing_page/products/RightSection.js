import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return (
        <div className='container mt-4 mt-md-5 px-3'>
            <div className='row align-items-center flex-column-reverse flex-md-row'>
                {/* Content Section: Full width on mobile, 6 columns on desktop */}
                <div className='col-12 col-md-6 p-2 p-md-4 text-center text-md-start mt-4 mt-md-0'>
                    <h1 className='fs-2 fs-md-1 fw-bold'>{productName}</h1>
                    <p className='text-muted fs-6 mt-3'>{productDescription}</p>
                    <div className='mt-3'>
                        <a href={learnMore || '#'} className='text-decoration-none'>
                            Learn More <i className="fa-solid fa-arrow-right-long ms-1"></i>
                        </a>
                    </div>
                </div>

                {/* Product Image Section */}
                <div className='col-12 col-md-6 text-center'>
                    <img 
                        src={imageURL} 
                        alt={productName || 'Product'} 
                        className='img-fluid' 
                    />
                </div>
            </div>
        </div>
    );
}

export default RightSection;