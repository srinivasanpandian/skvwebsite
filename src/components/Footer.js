import React from 'react';
import './Home.css'; // Reuse styles or add new ones in Home.css

function Footer() {
  return (
    <footer className="footer-section pt-5 pb-3" style={{background:'#0a1833', color:'#fff', position:'relative', zIndex:2}}>
      <div className="container">
        <div className="row mb-4">
          {/* Logo & About */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img src="img/logo.png" alt="Sri Krishna Vilas Logo" style={{height:60, marginBottom:16}} />
            <p className="footer-about mt-3" style={{maxWidth:320, color:'#bdbdbd', fontSize:'1rem'}}>Rooted in divine heritage and inspired by Krishna's favorite delicacies, we bring you a sattvic feast full of purity, tradition, and taste.</p>
            <div className="footer-social mt-3">
              <span style={{fontWeight:600}}>Connect With Us</span>
              <a href="/" className="ms-3 me-2"><img src="/img/facebook.png" alt="Facebook" style={{width:28, height:28}} /></a>
              <a href="/" className="me-2"><img src="/img/instagram-icon.png" alt="Instagram" style={{width:28, height:28}} /></a>
              <a href="/" ><img src="/img/google.png" alt="Google" style={{width:28, height:28}} /></a>
            </div>
          </div>
          {/* Menu & Help */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="footer-heading mb-3" style={{color:'#FFC107', fontWeight:700, borderBottom:'2px solid #FFC107', display:'inline-block', paddingBottom:2}}>Menu</h5>
            <ul className="footer-list list-unstyled mt-3">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/menu" className="footer-link">Food Menu</a></li>
              <li><a href="/catering" className="footer-link">Catering Menu</a></li>
              <li><a href="/franchise" className="footer-link">Franchise</a></li>
              <li><a href="/locations" className="footer-link">Locations</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="footer-heading mb-3" style={{color:'#FFC107', fontWeight:700, borderBottom:'2px solid #FFC107', display:'inline-block', paddingBottom:2}}>Help</h5>
            <ul className="footer-list list-unstyled mt-3">
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="col-md-4">
            <h5 className="footer-heading mb-3" style={{color:'#FFC107', fontWeight:700, borderBottom:'2px solid #FFC107', display:'inline-block', paddingBottom:2}}>Newsletter</h5>
            <div className="footer-newsletter mt-3">
              <p style={{color:'#bdbdbd', fontSize:'1rem'}}>Get recent news and updates.</p>
              <form className="d-flex flex-column flex-sm-row align-items-center gap-2">
                <input type="email" className="form-control" placeholder="Email Address" style={{maxWidth:260, borderRadius:8, background:'#fff', color:'#0a1833', border:'none', fontWeight:500}} />
                <button type="submit" className="btn btn-danger px-4 py-2 mt-2 mt-sm-0" style={{borderRadius:12, fontWeight:700, boxShadow:'2px 2px 0 #FFC107'}}>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="footer-divider my-3" style={{height:6, background:'#FFC107', borderRadius:3, opacity:0.95}}></div>
        {/* Popular Links */}
        <div className="row mb-2 flex-column">
          <div className="col-12 mb-2">
            <h6 className="footer-popular-heading">Popular Locations</h6>
            <div className="footer-popular-text">Sri Krishna Vilas Cumming, Sri Krishna Vilas Texas, Sri Krishna Vilas Hyderabad</div>
          </div>
          <div className="col-12 mb-2">
            <h6 className="footer-popular-heading">Popular Services</h6>
            <div className="footer-popular-text">Break Fast, Lunch Thali, Dinner Menu, Dosa's, Biryani, North Indian Menu, Weekend Special Thali, Chinese menu, snacks, Catering</div>
          </div>
          <div className="col-12 mb-2">
            <h6 className="footer-popular-heading">Popular Dishes</h6>
            <div className="footer-popular-text">Soup, Veg Appetizer, South Indian Special, veg Curry, variety Rice, Chinese, snacks, South Indian Tiffins, Veg Fry, Vegetarian Currys, South Indian Special Weekend Thali, Biryani, 60+ Dosa Varie</div>
          </div>
          <div className="col-12 mb-2">
            <h6 className="footer-popular-heading">Popular Searches</h6>
            <div className="footer-popular-text">Soup, Veg Appetizer, Appetizer, Veg Special, Appetizer Special, Veg Fry, Vegetarian Currys, South Indian Special, South Indian Tiffins, variety Rice, Pulavs, Biryanis, Rices, Tiffins, Desserts, Dosa Specials, Idly, Poori</div>
          </div>
        </div>
        {/* Divider */}
        <div className="footer-divider my-3" style={{height:6, background:'#FFC107', borderRadius:3, opacity:0.95}}></div>
        {/* Copyright */}
        <div className="footer-bottom d-flex flex-column flex-md-row align-items-center justify-content-between mt-3" style={{fontWeight:600, color:'#fff', fontSize:'1rem'}}>
          <div>
            © 2024 Sri Krishna Vilas, All rights reserved — Technology Powered By
          </div>
          <div>
            <button className="btn btn-outline-warning btn-sm ms-2" style={{borderRadius:'50%', width:38, height:38, fontWeight:700, fontSize:'1.2rem', boxShadow:'0 2px 8px rgba(0,0,0,0.12)'}} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
              <i className="bi bi-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Krishna background image */}
      <img src="/img/krishna-footer.webp" alt="Krishna" className="footer-krishna-bg" style={{position:'absolute', left:0, bottom:0, width:'100%', height:'100%', objectFit:'cover', opacity:0.18, zIndex:1, pointerEvents:'none'}} />
    </footer>
  );
}

export default Footer; 