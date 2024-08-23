import React from 'react'

const ErrorPage = () => {
  return (
    <>
           <section classNameName="page-header">
            <div classNameName="shape"><img src="assets/img/shapes/page-header-shape.png" alt="shape"/></div>
            <div classNameName="container">
                <div classNameName="page-header-content">
                    <h1 classNameName="title">Error Page</h1>
                    <h4 classNameName="sub-title">
                        <span classNameName="home">
                            <a href="#">
                                <span>Home</span>
                            </a>
                        </span>
                        <span classNameName="icon"><i classNameName="fa-solid fa-angle-right"></i></span>
                        <span classNameName="inner">
                            <span>Error Page</span>
                        </span>
                    </h4>
                </div>
            </div>
        </section>

        <section className="error-section pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-content text-center">
                            <img src="assets/img/images/error-img.png" alt="error"/>
                            <h3 className="title">Page Not Found</h3>
                            <p>Sorry, we couldn't find the page you where looking for. We suggest that you return to homepage.</p>
                            <a href="index.html" className="rr-primary-btn">Back to Homepage</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ErrorPage