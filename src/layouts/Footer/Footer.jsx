import React from "react";
import { Link } from "react-router-dom";
import FooterStyled from './FooterStyled';

import { ReactComponent as ReactLogo } from './../../assets/svg/LogoFooter.svg';

const Footer = () => {
    return (
        <FooterStyled>
            <div className="footer">
                <div className="logo_col">
                    <div className="logo_header">
                        <Link to="https://gosomewhere.com" aria-label="Back to homepage" className="logo">
                            <ReactLogo />
                        </Link>
                        <li className="flex">
                            <Link to="https://gosomewhere.com" className="logo_desc">CriptCCR</Link>
                        </li>
                    </div>
                    <div className="logo_body">
                        <p>
                            Bla Bla Bla Bla Bla Bla Bla Bla<br />
                            Bla Bla Bla Bla Bla Bla Bla Bla
                        </p>
                    </div>
                </div>
                <div className="other_col">
                    <div className="nav_col">
                        <div className="nav_header">
                            <h3 className="navigation_title">Navigation</h3>
                        </div>
                        <div className="nav_body">
                            <div className="body_1">
                                <ul>
                                    <li>
                                        <a href="#a">Launchpad</a>
                                    </li>
                                    <li>
                                        <a href="#a">Tops</a>
                                    </li>
                                    <li>
                                        <a href="#a">Marketplace</a>
                                    </li>
                                    <li className="other">
                                        <a href="#a">Collection</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="body_2">
                                <ul>
                                    <li>
                                        <a href="#a">Deals</a>
                                    </li>
                                    <li>
                                        <a href="#a">White paper</a>
                                    </li>
                                    <li>
                                        <a href="#a">Community</a>
                                    </li>
                                    <li className="other">
                                        <a href="#a">Wallet</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="body_3">
                                <ul>
                                    <li>
                                        <a href="#a">Collection</a>
                                    </li>
                                    <li>
                                        <a href="#a">Wallet</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="token_col">
                        <div className="token_header">
                            <h3>Token NTF</h3>
                        </div>
                        <div className="token_body">
                            <button
                                type="button"
                                className="btn_validation"
                            >
                                Validation
                            </button>
                            <button
                                type="button"
                                className="btn_create"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">Copyright © 2021 UI8 LLC. All rights reserved</div>
        </FooterStyled>
    );
}
export default Footer;