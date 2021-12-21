import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpStyled from './SignUpStyled';

import { ReactComponent as Key } from '../../../assets/svg/Key.svg';
import { ReactComponent as Warning } from '../../../assets/svg/Warning.svg';
import { ReactComponent as Back } from '../../../assets/svg/Back.svg';
import { ReactComponent as Mark } from '../../../assets/svg/Mark.svg';

import Header from "../../../layouts/Headers/AuthHeader/AuthHeader";
import Footer from "../../../layouts/Footer/Footer";
import SignIn from "../SignIn/SignIn";

const SignUp = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div>
            <Header></Header>
            <SignUpStyled>
                <div className="back">
                    <Back />
                    <span>Back</span>
                </div>
                <div className="title">
                    <div className="sub_title">
                        <h2>Create New Account</h2>
                        <h5>Have an account? <Link to="/" element={<SignIn />} className="login_here">Log In here</Link></h5>
                    </div>
                    <div className="key_col">
                        <div className="key_svg">
                            <Key />
                        </div>
                        <div className="key_desc">
                            <span>12 word Password</span><br />
                            <h5 className="key_title">Generate your own unique</h5>
                            <h5 className="key_title">12 word password</h5>
                        </div>
                    </div>
                </div>
                <form className="signup_input">
                    <div className="input_body">
                        <div className="pwd_input">
                            <div className="pwd_title">
                                <label className="block">Your Password</label>
                                <label className="subtitle">Generate New Password</label>
                            </div>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="region adapt height fall train clerk memory always bomb equip head someone"
                                className="" />
                            <button>
                                <Mark className="mark" />
                            </button>
                            <label className="generate">Generate New Password</label>
                        </div>
                        <div className="confirm_pwd_input">
                            <div className="confirm_title">
                                <label className="block">Confirm your Password</label>
                                {confirmPassword !== '' && password !== confirmPassword &&
                                    <label className="incorrect">Incorrect Password Confimation</label>
                                }
                            </div>
                            <input
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                                placeholder=""
                                className="confirm_pwd " />
                            {confirmPassword !== '' && password !== confirmPassword &&
                                <label className="incorrect_confirm">Incorrect Password Confimation</label>
                            }
                        </div>
                        <button className="create_act">Create Account</button>
                    </div>
                </form>
                <div className="warning_container">
                    <div className="warning_mark">
                        <Warning className="svg" />
                    </div>
                    <div className="warning_desc">
                        <h4>You must save your Password</h4>
                        <p>
                            In the field above you will get your “12 word Password” in specific order. This information is private and must be kept secure.  This is the only way to access your wallet. If lost, recovery is not possible because we never store your Password on our servers. If your Password had been stolen you must move your funds to a new account immediately with a newly generated Password. Save your “12 word Password” on a piece of paper and put it in a secure place or saving it to an encrypted file on a USB stick.
                        </p>
                    </div>
                </div>
            </SignUpStyled>
            <Footer></Footer>
        </div>
    );
}

export default SignUp;