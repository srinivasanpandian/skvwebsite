import React, { useState } from "react";

import "./Home.css"; // For custom styles, create this file as needed
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./Footer";

// Menu slider data
const menuItems = [
  { title: "Soups", img: "/img/menu1.png" },
  { title: "Starters", img: "/img/menu2.png" },
  { title: "South Indian Tiffins", img: "/img/menu3.png" },
  { title: "Dosas", img: "/img/menu4.png" },
  { title: "Curries", img: "/img/menu5.png" },
  { title: "Uthappam", img: "/img/menu6.png" },
];

function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [menuIndex, setMenuIndex] = useState(0);

  // Review slider state
  const reviews = [
    {
      text: "A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. All great deeds and all great thoughts",
      name: "Priya S.",
      images: [
        "/img/review-coffee.png",
        "/img/review-panner.png",
        "/img/review-icecream.png",
      ],
    },
    {
      text: "Absolutely divine food and a spiritual ambience! The staff is so warm and welcoming. My family's new favorite spot for South Indian cuisine.",
      name: "Ramesh K.",
      images: [
        "/img/review-coffee.png",
        "/img/review-panner.png",
        "/img/review-icecream.png",
      ],
    },
    {
      text: "The flavors are so authentic and the presentation is beautiful. I love the attention to detail and the peaceful vibe. Highly recommended!",
      name: "Anjali M.",
      images: [
        "/img/review-coffee.png",
        "/img/review-panner.png",
        "/img/review-icecream.png",
      ],
    },
  ];
  const [reviewIndex, setReviewIndex] = useState(0);

  const handleHamburgerClick = () => setMobileNavOpen(!mobileNavOpen);
  const handleNavLinkClick = () => setMobileNavOpen(false);

  // Auto-advance review slider
  React.useEffect(() => {
    const interval = setInterval(() => {
      setReviewIndex((current) => (current + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section d-flex flex-column justify-content-between text-center"
        style={{
          backgroundImage: "url('/img/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
          fontFamily: "'Instrument Sans', Arial, sans-serif",
        }}
      >
        <div className="overlay" />
        <div className="hero-header-row">
          <div className="header-logo">
            <img
              src="/img/logo.png"
              alt="Sri Krishna Vilas Logo"
              className="skv-logo"
            />
          </div>
          <nav className="header-nav d-none d-lg-flex">
            <ul className="nav nav-pills justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="/"
                  onClick={handleNavLinkClick}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  onClick={handleNavLinkClick}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#menu"
                  onClick={handleNavLinkClick}
                >
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#catering"
                  onClick={handleNavLinkClick}
                >
                  Catering
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="hamburger d-lg-none" onClick={handleHamburgerClick}>
            <i className={`bi ${mobileNavOpen ? "bi-x" : "bi-list"}`}></i>
          </div>
          <div className="franchise-btn d-none d-xl-flex">
            <i className="bi bi-shop me-2"></i>
            <a href="#franchise" className="btn btn-outline-light">
              Get Franchise
            </a>
          </div>
        </div>
        <div className={`mobile-nav${mobileNavOpen ? " open" : ""}`}>
          <div
            className="mobile-nav-overlay"
            onClick={handleNavLinkClick}
          ></div>
          <div className="mobile-nav-content">
            <ul className="nav flex-column align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="/"
                  onClick={handleNavLinkClick}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  onClick={handleNavLinkClick}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#menu"
                  onClick={handleNavLinkClick}
                >
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#catering"
                  onClick={handleNavLinkClick}
                >
                  Catering
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item franchise-mobile">
                <a
                  className="nav-link franchise-link"
                  href="#franchise"
                  onClick={handleNavLinkClick}
                >
                  <i className="bi bi-shop me-2"></i>Get Franchise
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="container hero-content-center d-flex flex-column justify-content-center align-items-center flex-grow-1"
          style={{ minHeight: "60vh" }}
        >
          <div className="hero-text">
            <h1 className="display-3 fw-bold hero-title">
              Divinely Sattvic. Soulfully South Indian.
            </h1>
            <p className="lead hero-subtitle">
              Taste the bliss of tradition and purity at Sri Krishna Vilas!
            </p>
            <button className="btn btn-outline-light mt-3 hero-menu-btn">
              OPEN MENU
            </button>
          </div>
        </div>
        <div
          className="scroll-down"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 32,
            margin: "0 auto",
            width: "fit-content",
          }}
        >
          <i className="bi bi-chevron-double-down"></i>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="about-section py-5"
        style={{ background: "#0a1833", color: "#fff" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="about-subheading">WELCOME TO SRI KRISHNA VILAS</h6>
            <h2 className="about-heading">
              A Sacred Spot for Exceptional Vegetarian Delights
            </h2>
          </div>
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-3 col-md-4 col-sm-6 text-center mb-4 mb-lg-0 about-img-wrapper"
              style={{ position: "relative" }}
            >
              <img
                src="/img/pattern1.png"
                alt="Pattern 1"
                className="about-pattern about-pattern1"
              />
              <img src="/img/about1.jpg" alt="About 1" className="about-img" />
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 text-center mb-4 mb-lg-0 about-img-wrapper"
              style={{ position: "relative" }}
            >
              <img
                src="/img/pattern2.png"
                alt="Pattern 2"
                className="about-pattern about-pattern2"
              />
              <img src="/img/about2.jpg" alt="About 2" className="about-img" />
            </div>
            <div className="col-lg-6 col-md-12 about-desc">
              <p>
                Sri Krishna Vilas is a unique vegetarian restaurant inspired by
                the divine offerings of Lord Krishna. Every dish is rooted in
                sattvic principles and temple-style recipes, hand-crafted with
                care and love. Our chefs bring to life culinary heritage passed
                down through generations, with a touch of modern elegance.
              </p>
              <p>
                Beyond the taste, our ambiance transports you to a spiritual
                journey—guided by the aroma of fresh prasadam, the melody of
                flute music, and the richness of Indian hospitality. A true
                Krishna Bhojanam experience to cherish forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="stats-section py-5"
        style={{ background: "#0a1833", color: "#FFC107" }}
      >
        <div className="container">
          <div className="stats-row-custom">
            <div className="stats-col">
              <img src="/img/since.png" alt="Since" className="stats-icon" />
              <div className="stats-col-content">
                <div className="stats-label">Since</div>
                <div className="stats-value">2002</div>
              </div>
            </div>
            <img
              src="/img/flute.png"
              alt="Flute Divider"
              className="stats-divider"
            />
            <div className="stats-col">
              <img
                src="/img/countries.png"
                alt="Countries"
                className="stats-icon"
              />
              <div className="stats-col-content">
                <div className="stats-label">Countries</div>
                <div className="stats-value">2</div>
              </div>
            </div>
            <img
              src="/img/flute.png"
              alt="Flute Divider"
              className="stats-divider"
            />
            <div className="stats-col">
              <img
                src="/img/locations.png"
                alt="Locations"
                className="stats-icon"
              />
              <div className="stats-col-content">
                <div className="stats-label">Locations</div>
                <div className="stats-value">3+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="features-section py-5"
        style={{ background: "#0a1833", color: "#fff" }}
      >
        <div className="container">
          <div className="row text-center justify-content-center g-4">
            <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 mb-4">
              <div className="feature-card h-100">
                <img
                  src="/img/feature1.png"
                  alt="Sattvic & Healthy"
                  className="feature-icon"
                />
                <h5 className="fw-bold mt-3">100% Sattvic & Healthy</h5>
                <p>
                  Every meal at Sri Krishna Vilas is prepared with fresh,
                  wholesome ingredients following traditional sattvic
                  principles—free from onion, garlic, and artificial additives.
                  It's food that nourishes the body and uplifts the soul.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 mb-4">
              <div className="feature-card h-100">
                <img
                  src="/img/feature2.png"
                  alt="Authentic Taste"
                  className="feature-icon"
                />
                <h5 className="fw-bold mt-3">Authentic Taste.</h5>
                <p>
                  Our menu brings together the time-honored recipes loved by
                  Lord Krishna, served in an ambience inspired by Indian
                  temples—calm, pure, and deeply spiritual.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 mb-4">
              <div className="feature-card h-100">
                <img
                  src="/img/feature3.png"
                  alt="Temple-Inspired Ambience"
                  className="feature-icon"
                />
                <h5 className="fw-bold mt-3">Temple-Inspired Ambience</h5>
                <p>
                  From the soft glow of lamps to the soothing notes of flute
                  music, every detail at Sri Krishna Vilas evokes the serenity
                  of a divine temple setting—offering you more than a meal, a
                  moment of inner peace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section
        className="review2-section py-5"
        style={{ background: "#06142b", color: "#fff" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* Left: Text and Testimonial Card */}
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
              <div
                className="mb-2"
                style={{
                  color: "#FFC107",
                  fontWeight: 700,
                  letterSpacing: 1,
                  fontSize: "1.1rem",
                }}
              >
                TESTIMONIALS & REVIEWS
              </div>
              <h2 className="fw-bold mb-4 review2-title">
                Our Customer
                <br className="d-none d-md-block" />
                Feedbacks
              </h2>
              <div className="review2-card position-relative p-4">
                <div className="review2-text">{reviews[reviewIndex].text}</div>
                <div className="review2-name fw-bold">
                  {reviews[reviewIndex].name}
                </div>
                <div className="review2-circle position-absolute"></div>
              </div>
              {/* Slider dots */}
              <div
                className="review2-dots d-flex align-items-center justify-content-center justify-content-lg-start mt-4"
                style={{ gap: "1.1rem" }}
              >
                {reviews.map((_, idx) => (
                  <span
                    key={idx}
                    className="review-dot"
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      display: "inline-block",
                      background: idx === reviewIndex ? "#FFC107" : "#fff",
                      opacity: idx === reviewIndex ? 1 : 0.4,
                      cursor: "pointer",
                      border:
                        idx === reviewIndex
                          ? "2px solid #FFC107"
                          : "2px solid #fff",
                      transition: "background 0.2s, opacity 0.2s, border 0.2s",
                    }}
                    onClick={() => setReviewIndex(idx)}
                  />
                ))}
              </div>
            </div>
            {/* Right: Images */}
            <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center position-relative review2-img-col">
              <div className="review-images-container position-relative">
                <img
                  src={reviews[reviewIndex].images[0]}
                  alt="Review Top"
                  className="review2-img review2-img-top"
                />
                <div className="review2-img-center position-relative d-flex align-items-center justify-content-center">
                  <img
                    src={reviews[reviewIndex].images[1]}
                    alt="Review Center"
                    className="review2-img"
                  />
                  <div className="review2-img-overlay position-absolute"></div>
                </div>
                <img
                  src={reviews[reviewIndex].images[2]}
                  alt="Review Bottom"
                  className="review2-img review2-img-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Slider Section */}
      <section
        id="menu"
        className="menu-slider-section py-5"
        style={{ background: "#0a1833", color: "#fff", position: "relative" }}
      >
        <div className="container-fluid position-relative">
          <div className="d-flex align-items-center mb-4 menu-header-row">
            <h2 className="fw-bold mb-0 me-3" style={{ color: "#FFC107" }}>
              Our Menu
            </h2>
            <div className="menu-slider-arrows d-flex align-items-center">
              <button
                className="menu-arrow"
                onClick={() => setMenuIndex((i) => Math.max(i - 1, 0))}
              >
                &lt;
              </button>
              <button
                className="menu-arrow"
                onClick={() =>
                  setMenuIndex((i) => Math.min(i + 1, menuItems.length - 1))
                }
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="menu-slider-wrapper">
            <div
              className="menu-slider-track"
              style={{
                transform: `translateX(-${menuIndex * (100 / menuItems.length)}%)`,
              }}
            >
              {menuItems.map((item, idx) => (
                <div className="menu-slider-card" key={item.title}>
                  <div className="menu-slider-img-wrap">
                    <img
                      src="/img/menuitem-bg.png"
                      alt="Menu Item BG"
                      className="menu-slider-img-bg"
                    />
                    <img
                      src={item.img}
                      alt={item.title}
                      className="menu-slider-img"
                    />
                  </div>
                  <h6 className="menu-slider-title">{item.title}</h6>
                  <button className="btn btn-dark btn-sm">Explore More</button>
                </div>
              ))}
            </div>
          </div>
          <div className="menu-slider-krishna">
            <img
              src="/img/krishna-menu.png"
              alt="Krishna"
              className="menu-slider-krishna-img"
            />
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section
        className="insta-section py-5"
        style={{ background: "#0a1833", color: "#fff" }}
      >
        {/* ... existing code ... */}
      </section>
      <Footer />
    </div>
  );
}

export default Home;
