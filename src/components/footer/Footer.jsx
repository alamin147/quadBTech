import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Quick Links</h3>
              <ul>
                
                  <li>Home</li>
               
               
                  <li>Blog</li>
               
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>Company</li>
                <li>Team</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <div className="d-flex align-items-center">
                <div>
                  <h3>Movie Theatre</h3>
                </div>
              </div>
              <p className="mt-2">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure eos accusamus voluptates saepe ipsa vero laudantium molestias, distinctio aliquid!
              </p>
            </div>
            <div className="col item social">
              <i className="icon ion-social-facebook"></i>
              <i className="icon ion-social-twitter"></i>
              <i className="icon ion-social-snapchat"></i>
              <i className="icon ion-social-instagram"></i>
            </div>
          </div>
          <p className="copyright">Movie Theatre © 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
