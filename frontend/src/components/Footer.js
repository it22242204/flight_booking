import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Connect with us on social media to stay updated with the latest news and offers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-500">
                  Submit Article
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Freebies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-center">
                <div className="bg-purple-600 h-5 w-5 rounded-full mr-4"></div>
                <span>(888) 231 4522 258</span>
              </li>
              <li className="flex items-center">
                <div className="bg-purple-600 h-5 w-5 rounded-full mr-4"></div>
                <span>3129 Doctors Drive, Los Angeles, California, USA</span>
              </li>
            </ul>
          </div>

          {/* Gallery Showcase */}
          <div>
            <h3 className="text-xl font-bold mb-6">Gallery Showcase</h3>
            <div className="grid grid-cols-3 gap-4">
              {[image1, image2, image3, image4, image5, image6].map(
                (img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="rounded-lg w-full object-cover h-24 transition-transform duration-300 transform hover:scale-105"
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} FlightFinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
