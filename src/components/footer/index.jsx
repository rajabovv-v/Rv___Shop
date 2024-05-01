import React from "react";
import { Link } from "react-router-dom";
import {
  CompanyIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../assets/icons";

function Footer() {
  const list = [
    {
      id: 1,
      title: "About",
      subtitle: "About Us",
      subtitle1: "Find store",
      subtitle2: "Categories",
      subtitle3: "Blogs",
    },
    {
      id: 2,
      title: "Partnership",
      subtitle: "About Us",
      subtitle1: "Find store",
      subtitle2: "Categories",
      subtitle3: "Blogs",
    },
    {
      id: 3,
      title: "Information",
      subtitle: "Help Center",
      subtitle1: "Money Refund",
      subtitle2: "Shipping",
      subtitle3: "Contact us",
    },
    {
      id: 4,
      title: "For users",
      subtitle: "Login",
      subtitle1: "Register",
      subtitle2: "Settings",
      subtitle3: "My Orders",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <Link to={"/"}>
              <img
                src="/images/logo9.png"
                alt="site logo"
                style={{ width: 151, height: 46, objectFit: "cover" }}
              />
            </Link>
            <p className="footer-logo__subtitle">
              Best information about the company gies here but now lorem ipsum
              is
            </p>
            <div className="footer-logo__links">
              <Link className="footer-logo__icon">
                <FacebookIcon />
              </Link>
              <Link className="footer-logo__icon">
                <TwitterIcon />
              </Link>
              <Link className="footer-logo__icon">
                <CompanyIcon />
              </Link>
              <Link className="footer-logo__icon">
                <InstagramIcon />
              </Link>
              <Link className="footer-logo__icon">
                <YoutubeIcon />
              </Link>
            </div>
          </div>

          <div className="footer-main">
            {list.map((item) => (
              <div className="footer-links" key={item.id}>
                <h3 className="footer-links__title">{item.title}</h3>
                <Link className="footer-links__subtitle">{item.subtitle}</Link>
                <Link className="footer-links__subtitle">{item.subtitle1}</Link>
                <Link className="footer-links__subtitle">{item.subtitle2}</Link>
                <Link className="footer-links__subtitle">{item.subtitle3}</Link>
              </div>
            ))}
          </div>

          <div className="footer-apps">
            <h2 className="footer-apps__title">Get app</h2>
            <div className="footer-apps__store">
              <img src="/images/footer/app-store.png" alt="site logo" />
            </div>
            <div className="footer-apps__google">
              <img src="/images/footer/google-play.png" alt="site logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
