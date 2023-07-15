import React from 'react'
import './footer.css';


const Footer = () => {
  return (
    <div className='app__footer about--img'>
      <footer className='app__footer-grid'>
        <div className='app__footer-1'>
          <p>Shop and Learn</p>
          <a href="/">Store</a>
          <a href="/">Mac</a>
          <a href="/">iPad</a>
          <a href="/">iPhone</a>
          <a href="/">Watch</a>
          <a href="/">AirPods</a>
          <a href="/">Tv & Home</a>
          <a href="/">AirTag</a>
          <a href="/">Accessories</a>
          <a href="/">Gift Cards</a>
          <p>Apple Wallet</p>
          <a href="/">Wallet</a>
          <a href="/">Apple Card</a>
          <a href="/">Apple Pay</a>
          <a href="/">Apple Cash</a>
        </div>
        <div className='app__footer-1'>
          <p>Account</p>
          <a href="/">Manage Your Apple ID</a>
          <a href="/">Apple Store Account</a>
          <a href="/">iCloud.com</a>
          <p>Entertainment</p>
          <a href="/">Apple One</a>
          <a href="/">Apple TV+</a>
          <a href="/">Apple Music</a>
          <a href="/">Apple Arcade</a>
          <a href="/">Apple Fitness+</a>
          <a href="/">Apple News+</a>
          <a href="/">Apple Podcasts</a>
          <a href="/">Apple Books</a>
          <a href="/">App Store</a>
        </div>

        <div className='app__footer-1'>
          <p>Apple Store</p>
          <a href="/">Find a Store</a>
          <a href="/">Genius Bar</a>
          <a href="/">Today at Apple</a>
          <a href="/">Apple Camp</a>
          <a href="/">Apple Store App</a>
          <a href="/">Certified Refurbished</a>
          <a href="/">Financing</a>
          <a href="/">Apple Trade In</a>
          <a href="/">Order Status</a>
          <a href="/">Shopping Help</a>
        </div>

        <div className='app__footer-1'>
          <p>For Business</p>
          <a href="/">Apple and Business</a>
          <a href="/">Shop for Business</a>
          <p>For Education</p>
          <a href="/">Apple and Education</a>
          <a href="/">Shop for K-12</a>
          <a href="/">Shop for College</a>
          <p>For Healthcare</p>
          <a href="/">Apple in Healthcare</a>
          <a href="/">Health on Apple Watch</a>
          <a href="/">Health Records on iPhone</a>
          <p>For Government</p>
          <a href="/">Shop for Government</a>
          <a href="/">Shop for Veterans and Military</a>
        </div>

        <div className='app__footer-1'>
          <p>Apple values</p>
           <a href="/">Accessibility</a>
           <a href="/">Education</a>
           <a href="/">Environment</a>
           <a href="/">Inclusion and Diversity</a>
           <a href="/">Privacy</a>
           <a href="/">Racial Equity and Justice</a>
           <a href="/">Supplier Responsibility</a>
           <p>About Apple</p>
           <a href="/">Newsroom</a>
           <a href="/">Apple Leadership</a>
           <a href="/">Career Opportunities</a>
           <a href="/">Investors</a>
           <a href="/">Ethics & Compliance</a>
           <a href="/">Events</a>
           <a href="/">Contact Apple</a>
        </div>
      </footer>
     
      <p className='footer--footer'>More ways to shop: <span>Find an Apple Store </span> or <span>other retailer</span> near you. Or call 1-800-MY-APPLE.</p>
      <div className='app__footer-last'> 
        <p className='copyright--text'>Copyright © 2023 Apple Inc. All rights reserved.</p>
        <div className='app__footer-links'>
          <a href="/">Privacy Policy</a>
          <span><a href="/">Terms of Use</a></span>
          <a href="/">Sales and Refunds</a>
          <span><a href="/">Legal</a></span>
          <a className='site--map' href="/">Site Map</a>
        </div>
        <a className='united--text' href="/">United States</a>
      </div>
    </div>
  )
}

export default Footer;