import React from "react";
import { useHistory } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faInstagram, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faMapMarkedAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import './bootstrap.min.css';
import './styles.css';

const Footer = () => {
    let history = useHistory();

    return (
    <footer className="footer">
        <div className="footer page-footer w-100 site-footer pb-4">
            <div className="col-xl-9 col-lg-10 col-sm-10 col-10 row h-100 px-0 mx-auto pt-4 footer-content">
                <div className="col-lg-4 col-md-6 social-media-block p-0 color-gray">
                    <div className="primary-text logo ml-3 mb-4">
                        Bookstore
                    </div>
                    <div className="primary-text ml-3 social-media">
                        Follow us on social media:
                    </div>
                    <ul className="list-inline ml-2 mt-4 mr-2 ">
                        <li className="list-inline-item">
                            <a href="https://www.instagram.com/vdzhos/" title="instagram" target="_blank"
                               className="fab primary-text"><FontAwesomeIcon icon={faInstagram}
                                                                             textDecoration={"none"}/> </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.facebook.com/volodymyr.dgosan/" title="facebook"
                               target="_blank"
                               className="fab primary-text"><FontAwesomeIcon icon={faFacebook}
                                                                             textDecoration={"none"}/></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://t.me/vdzhos/" title="telegram" target="_blank"
                               className="fab fa-telegram-plane primary-text text-decoration-none"><FontAwesomeIcon
                                icon={faTelegram} textDecoration={"none"}/></a>
                        </li>
                        {/*<li className="list-inline-item">
                            <a href="https://twitter.com/" title="twitter" target="_blank"
                               className="fab fa-twitter primary-text text-decoration-none"><FontAwesomeIcon
                                icon={faTwitter} textDecoration={"none"}/></a>
                        </li>*/}
                    </ul>
                </div>
                <div className="col-lg-4 d-lg-block d-none info-block  color-gray">
                    <ul className="list-unstyled pl-5 info-list">
                        <li>
                            <a href="#" title="about us" onClick = {() => history.push("/about")}>About Us</a>
                        </li>
                        <li>
                            <a href="#" title="delivery">Shipping and Delivery</a>
                        </li>
                        <li>
                            <a href="#" title="payment">Payment Options</a>
                        </li>
                        <li>
                            <a href="#" title="returns">Returns</a>
                        </li>
                        <li>
                            <a href="#" title="loyalty program">Loyalty Program</a>
                        </li>
                        <li>
                            <a href="#" title="contact us">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 contacts-block  color-gray">
                    <ul className="list-unstyled pl-lg-5 pl-md-4 contacts-list">
                        <li>
                            <div className="d-inline-block"><FontAwesomeIcon icon={faPhoneAlt}/> &ensp;(097) 019
                                90 40
                            </div>
                        </li>
                        <li>
                            <div className="d-inline-block"><FontAwesomeIcon icon={faPhoneAlt}/>&ensp;(050) 123
                                45 67
                            </div>
                        </li>
                        <li>
                            <div className="d-inline-block"><FontAwesomeIcon icon={faPhoneAlt}/>&ensp;(063) 987
                                65 43
                            </div>
                        </li>
                        <li>
                            <div className="d-inline-block"><FontAwesomeIcon
                                icon={faEnvelope}/>&ensp;dgosan37@gmail.com
                            </div>
                        </li>
                        <li>
                            <div className="d-inline-block"><FontAwesomeIcon icon={faMapMarkedAlt}/>&ensp;Kyiv,
                                Hryhoriya Skovorody St, 2
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);
}
export default Footer;