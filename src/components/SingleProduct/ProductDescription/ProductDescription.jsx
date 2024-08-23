import React from 'react'

const ProductDescription = () => {
  return (
   <>
     <section className="product-description pb-100">
            <div className="container">
                <ul className="nav tab-navigation" id="product-tab-navigation" role="tablist">
                    <li role="presentation">
                        <button className="active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
                            role="tab" aria-controls="home" aria-selected="true">Description</button>
                    </li>
                    <li role="presentation">
                        <button id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab"
                            aria-controls="profile" aria-selected="false">Additional information</button>
                    </li>
                    <li role="presentation">
                        <button id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab"
                            aria-controls="contact" aria-selected="false">Reviews (3)</button>
                    </li>
                </ul>
                <div className="tab-content" id="product-tab-content">
                    <div className="tab-pane fade show active description" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="desc-wrap">
                            <div className="left-content">
                                <p className="mb-30">Credibly negotiate emerging materials whereas clicks-and-mortar intellectual capital. Compellingly whiteboard client-centric sourcescross-platform schemas. Distinctively develop future-proof outsourcing without multimedia based portals. Progressively coordinate generation architectures for collaborative solutions. Professionally restore backward-compatible quality vectors before customer directed metrics. Holisticly restore technically sound internal or "organic" sources before client-centered human capital underwhelm holistic mindshare for prospective innovation.</p>
                                <p className="mb-0">Seamlessly target fully tested infrastructures whereas just in time process improvements. Dynamically exploit team driven functionalities vis a vis global total linkage redibly synthesize just in time technology rather than open-source strategic theme areas.</p>
                            </div>
                            <div className="right-content">
                                <img src="assets/img/shop/shop-details-img.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th scope="col">Size</th>
                                    <th scope="col">Bust</th>
                                    <th scope="col">Waist</th>
                                    <th scope="col">Hip</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>S</td>
                                    <td>34 -36</td>
                                    <td>28-30</td>
                                    <td>38-40</td>
                                </tr>
                                <tr>
                                    <td>M</td>
                                    <td>36 -38</td>
                                    <td>30-32.5</td>
                                    <td>40-43</td>
                                </tr>
                                <tr>
                                    <td>L</td>
                                    <td>38-40</td>
                                    <td>32-34.5</td>
                                    <td>42-45.5</td>
                                </tr>
                                <tr>
                                    <td>XL</td>
                                    <td>40-42</td>
                                    <td>35-37</td>
                                    <td>46-38</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade review" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="row product-review gy-lg-0 gy-4">
                            <div className="col-lg-5 col-md-12">
                                <div className="reviewr-wrap">
                                    <div className="review-list">
                                        <div className="review-item">
                                            <div className="review-thumb">
                                                <img src="assets/img/shop/review-list-1.jpg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <div className="content-top">
                                                    <h4 className="name">Eleanor Fant <span>06 March, 2023</span></h4>
                                                    <ul className="review">
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                    </ul>
                                                </div>
                                                <p>Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.</p>
                                            </div>
                                        </div>
                                        <div className="review-item">
                                            <div className="review-thumb">
                                                <img src="assets/img/shop/review-list-2.jpg" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <div className="content-top">
                                                    <h4 className="name">Haliey White <span>06 March, 2023</span></h4>
                                                    <ul className="review">
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                        <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                                    </ul>
                                                </div>
                                                <p>Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="review-form-wrap">
                                    <h4 className="title">Review this product</h4>
                                    <span className="publish">Your email address will not be published. Required fields are marked *</span>
                                    <div className="review-box">
                                        <span>Your ratings :</span>
                                        <ul className="review">
                                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i className="fa-sharp fa-solid fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="blog-contact-form form-2 review-form">
                                        <div className="request-form">
                                            <form action="contact.php" method="post" id="ajax_contact" className="form-horizontal">
                                                <div className="form-group row">
                                                    <div className="col-md-12">
                                                        <div className="form-item">
                                                            <input type="text" id="fullname" name="fullname" className="form-control" placeholder="Your Name"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-item">
                                                            <input type="text" id="email" name="email" className="form-control" placeholder="Your Email"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-12">
                                                        <div className="form-item message-item">
                                                            <textarea id="message" name="message" cols="30" rows="5" className="form-control address" placeholder="Comment"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkbox-wrap">
                                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                                <label for="vehicle3">Save my name, email, and website in this browser for the next time I comment.</label><br/>
                                                </div>
                                                <div className="submit-btn">
                                                    <button id="submit" className="rr-primary-btn" type="submit">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   </>
  )
}

export default ProductDescription