import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import logo from '../../../Image & Icon/bodyflexGym-removebg.png';

const Footer = () => {

    const needHelp = [
        { name: "Help Center", link: "/helpCenter" },
        { name: "Email Support", link: "/emailSupport" },
        { name: "Live Chat", link: "/liveChat" },
        { name: "Gift Certificates", link: "/giftCertificates" },
        { name: "Send us feedback", link: "/feedback" },
    ]

    const digitalResources = [
        { name: "Articles", link: "/articles" },
        { name: "E-books", link: "/eBooks" },
        { name: "Blogs", link: "/blogs" },
        { name: "Audios", link: "/audios" },
        { name: "Videos", link: "/videos" },
    ]

    const ourAddress = [
        { name: "Vatara,Gulshan,Dhaka", link: "//google.com/map" },
        { name: "Bangladesh", link: "//google.com/map" },

    ]


    return (
        <footer className="footer-area clear-both footerBg">
            <div className="container pt-5">


                <div style={{ paddingLeft:35, paddingRight:35}}>

                    <div className="row py-5 row-cols-2 row-cols-md-4 g-4">

                        <div className="col">
                            <img src={logo} alt='' className='logo' />
                        </div>
                        {/* <FooterCol key={1} menuTitle={"."} menuItems={siteLogo}/> */}

                        <div className="col">
                            <FooterCol key={2} menuTitle={"Need Help?"} menuItems={needHelp} />
                        </div>

                        <div className="col">
                            <FooterCol key={3} menuTitle="Digital Resources" menuItems={digitalResources} />
                        </div>

                        <div className="col">
                            <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>

                                <ul className="social-media list-inline">
                                    <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                    <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                    <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                                </ul>


                                <div className="mt-5">
                                    <h6 className='text-white'>Call now</h6>
                                    <button className="btn btn-primary">+2025550295</button>
                                </div>

                            </FooterCol>
                        </div>
                    </div> {/* row */}
                </div>


                <div className="copyRight text-center text-white">
                    <p>Copyright {(new Date()).getFullYear()}- Developed by Tanvir Ahmed Sarker</p>
                </div>


            </div>
        </footer>
    );
};

export default Footer;