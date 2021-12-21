import React, { useState } from "react";

import Header from "../../layouts/Headers/UserHeader/UserHeader";
import SubHeader from "../../layouts/SubHeader/SubHeader";
import Footer from "../../layouts/Footer/Footer";

import Wallet from "./Wallet/Wallet";
import Collection from "./Collection/Collection";
import TokenValidation from "./TokenValidation/TokenValidation";
import AccountSetting from "./AccountSetting/AccountSetting";

const UserSetting = () => {

    const [selectedMenu, setSelectedMenu] = useState(1);
    const [userAvatar, setUserAvatar] = useState('');

    const handleSelectMenu = (id) => {
        setSelectedMenu(id);
    }

    const handleSetHeaderAvatar = (img) => {
        setUserAvatar(img);
    }

    return (
        <>
            <Header userAvatar={userAvatar} />
            <SubHeader selectedMenu={selectedMenu} handleSelectMenu={handleSelectMenu} />
            {selectedMenu === 1 && <Wallet />}
            {selectedMenu === 2 && <Collection />}
            {selectedMenu === 3 && <TokenValidation />}
            {selectedMenu === 4 && <AccountSetting handleSetHeaderAvatar={handleSetHeaderAvatar} />}
            <Footer />
        </>
    );
}
export default UserSetting;