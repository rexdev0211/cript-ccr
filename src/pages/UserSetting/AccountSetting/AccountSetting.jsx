import Avatar from "material-ui/Avatar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { useState } from "react";
import { ReactComponent as EditProfile } from './../../../assets/svg/EditProfile.svg';
import { ReactComponent as Popex } from './../../../assets/svg/Popex.svg';
import { ReactComponent as UserIcon } from './../../../assets/svg/UserIcon.svg';
import AccountSettingStyled from './AccountSettingStyled';
import AvatarCropper from './AvatarCropper/AvatarCropper';




const AccountSetting = ({ handleSetHeaderAvatar }) => {

    const [showModal, setShowModal] = useState(false);
    const [userAvatar, setUserAvatar] = useState('');

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleSetUserAvatar = (img) => {
        setUserAvatar(img);
        handleSetHeaderAvatar(img);
    }

    return (
        <>
            <AccountSettingStyled>
                <div className="title">
                    <div className="subtitle">
                        <h2>Account Details</h2>
                        <span>Your personal data is shown below.</span>
                    </div>
                    <div className="key_mark">
                        <div className="key_svg">
                            <Popex />
                        </div>
                        <div className="key_desc">
                            <h5 className="key_balance">Balance</h5>
                            <span>65,442,256 CCR</span><br />
                            <h5 className="key_title">$17,558,987</h5>
                        </div>
                    </div>
                </div>
                <div className="user_icon">
                    {!userAvatar &&
                        <UserIcon />
                    }
                    {userAvatar &&
                        <MuiThemeProvider>
                            <Avatar src={userAvatar} size={100} />
                        </MuiThemeProvider>
                    }

                    <button className="edit_profile" onClick={() => setShowModal(true)}>
                        <EditProfile />
                    </button>
                </div>
                <label className="nick">Nickname</label>
                <div className="nickname">
                    <input
                        type="password"
                        placeholder="nickname12345" />
                    <button>Save</button>
                </div>
                {showModal &&
                    <AvatarCropper handleCloseModal={handleCloseModal} handleSetUserAvatar={handleSetUserAvatar} />
                }
            </AccountSettingStyled>
        </>
    );
}
export default AccountSetting;