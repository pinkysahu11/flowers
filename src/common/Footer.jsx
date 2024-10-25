import React from 'react'

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-box'>
            <div className='boxes'>
              <p className='font16px'>Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
            </div>
            <div className='input-btn'>
              <input className='email-btn' type="email" placeholder='Your email' />
              {/* <Btn/> */}
            </div>
          </div>

          {/* 2nd box  */}
          <div className='footer-box'>
            <div className='boxes'>
              <h1 className='footer-title'>Contact Us</h1>
              <div className='infomation'>
                <p className='font14px'>Address</p>
                <address className='font16px'>15/4 Khreshchatyk Street, Kyiv </address>
              </div>
              <div className='infomation'>
                <p className='font14px'>Phone</p>
                <p className='font16px'>+380980099777</p>
              </div>

              <div className='infomation'>
                <label className='font14px' for="email">General Enquary:</label>
                <input className='font16px border' type="email" id="email" name="email" value={"Kiev.Florist.Studio@gmail.com"} />
              </div>

              <div className='infomation'>
                <h1 className='footer-title '>Follow Us</h1>
                <div className='social-media-icon' >
                  <img src=".\images\insta.png" alt="insta" />
                  <img src=".\images\Pinterest.png" alt="pinterest" />
                  <img src=".\images\Facebook.png" alt="Facebook" />
                  <img src=".\images\twiter.png" alt="Twiter" />
                  <img src=".\images\Telegram.png" alt="Telegram" />

                </div>
              </div>

            </div>
          </div>

          {/* 3rd box */}
          <div className='footer-box'>
            <div className='boxes'>
              <h1 className='footer-title'>Shop</h1>
              <div className='products-box'>
                <a className='products' href="">All Products</a>
                <a className='products' href="">Fresh Flowers</a>
                <a className='products' href="">Dried Flowers</a>
                <a className='products' href="">Live Plants</a>
                <a className='products' href="">Designer Vases</a>
                <a className='products' href="">Aroma Candles</a>
                <a className='products' href="">Freshener Diffuser</a>
              </div>
              <h1 className='footer-title'>Service</h1>
              <div className='products-box'>
                <a className='products' href="">Flower Subcription</a>
                <a className='products' href="">Wedding & Event Decor</a>
              </div>
            </div>
          </div>

          {/* 4th box */}
          <div className='footer-box'>
            <div className='boxes'>
              <h1 className='footer-title'> About Us</h1>
              <div className='products-box'>
                <a className='products' href="">Our story</a>
                <a className='products' href="">Blog</a>
              </div>
              <div className='products-box'>
                <a className='products' href="">Shipping & returns</a>
                <a className='products' href="">Terms & conditions</a>
                <a className='products' href="">Privacy policy</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )

}

export default Footer

