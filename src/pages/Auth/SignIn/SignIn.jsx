import React from "react";
import { Link } from "react-router-dom";
import SignInStyled from './SignInStyled';
import { ReactComponent as Back } from '../../../assets/svg/Back.svg';

import Header from "../../../layouts/Headers/AuthHeader/AuthHeader";
import Footer from "../../../layouts/Footer/Footer";
import SignUp from "../SignUp/SignUp";
import UserSetting from "../../UserSetting/UserSetting";

const SignIn = () => {
    return (
        <>
            <Header></Header>
            <SignInStyled>
                <div className="back">
                    <Back />
                    <span>Back</span>
                </div>
                <div className="title">
                    <h2>Log In your Account</h2>
                    <h5>Don’t have an account? <Link to="/signup" element={<SignUp />} className="create_act">Create Account</Link></h5>
                </div>
                <form className="login_input">
                    <div className="container">
                        <div className="input">
                            <label className="block">Enter your Password</label>
                            <input type="password" placeholder="Type your Password here to login"
                                className="" />
                        </div>
                        <Link to="/user_setting" element={<UserSetting />}>
                            <button className="login_btn">Login</button>
                        </Link>
                    </div>
                </form>
            </SignInStyled>
            <Footer></Footer>
        </>
    );
}
export default SignIn;