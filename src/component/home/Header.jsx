import React from 'react'

function Header() {
  return (
    <>

      <div className='header'>
        <div className='header-container'>
          <div className='banner-section'>
          <div className='nav-menu-left'>
            <div className='nav-link-btn'>Shop </div>
            <div className='nav-link-btn'>Contact</div>
          </div>
          <div className='nav-menu-right'>
            <div className='nav-link-btn'>Sign in</div>
            <div className='nav-link-btn'>cart</div>
          </div>
          </div>

        <div className='main-heading'>
          <div  className='heading-container1'>
            <h1 className='heading-font'>Kyiv LuxeBouquets</h1>
            <p className='heading-discrption'>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
            <div className='heading-container2'>
              <img src=".\images\heading_img.png" alt="" />
              <div className='vl'></div>
              <p className='paragraph' >Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      </div>
      {/* </div> */}
      {/* 
<div className='header'>
<div className='header-container'>
  <div className='banner-section'>
    <div className='nav-menu-left'>
<div className='nav-link-btn'>Shop </div>
<div className='nav-link-btn'>Contact</div>
</div>
<div className='nav-menu-right'>
<div className='nav-link-btn'>Sign in</div>
<div className='nav-link-btn'>Cart</div>
</div>
</div>
</div>
</div> */}

    </>
  )
}

export default Header
