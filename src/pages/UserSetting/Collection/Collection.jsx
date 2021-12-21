import React from "react";

import { ReactComponent as UserIcon } from './../../../assets/svg/UserIcon.svg';
import { ReactComponent as Popex } from './../../../assets/svg/Popex.svg';

import CollectionStyled from './CollectionStyled';

const Collection = () => {

    return (
        <>
            <CollectionStyled>
                <div className="title">
                    <h2>My Collection</h2>
                    <span>Your personal collection of tokens <br />is shown below.</span>
                </div>
                <div className="account_info">
                    <div className="user_avartar">
                        <div className="avartar">
                            <UserIcon className="user_icon" />
                        </div>
                        <div className="user_desc">
                            <h5 className="sub_desc">Account</h5>
                            <span className="main_desc">megaNFTsEller</span><br />
                        </div>
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
                <div className="description">
                    <span>Your collection is blanc right now start investing, get <br />you first NFT Token</span>
                </div>
                <div className="invest">
                    <button>Invest</button>
                </div>
            </CollectionStyled>
        </>
    );
}
export default Collection;