import React from 'react'
import ShopHeader from './ShopHeader/ShopHeader'
import ShopProducts from './ShopProducts/ShopProducts'
import ShopSidebar from './ShopSidebar/ShopSidebar'

const Shop = () => {
  return (
    <>
       <ShopHeader />
        <section className="shop-grid pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <ShopProducts />
                    <ShopSidebar />
                </div>
                </div>
                </section>
    </>
  )
}

export default Shop