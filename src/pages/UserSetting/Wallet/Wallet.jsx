import React from "react";

import { ReactComponent as Popex } from './../../../assets/svg/Popex.svg';
import { ReactComponent as Receive } from './../../../assets/svg/Receive.svg';
import { ReactComponent as Send } from './../../../assets/svg/Send.svg';
import { ReactComponent as Overview } from './../../../assets/svg/Overview.svg';
import { ReactComponent as Telegram } from './../../../assets/svg/Telegram.svg';
import { ReactComponent as Arrow } from './../../../assets/svg/Arrow.svg';
import { ReactComponent as UserIcon } from './../../../assets/svg/UserIcon.svg';

import WalletStyled from './WalletStyled';

const Wallet = () => {

	const cards = [
		{
			title: 'Overview',
			svg: <Overview />
		},
		{
			title: 'Send',
			svg: <Send />
		},
		{
			title: 'Receive',
			svg: <Receive />
		},
	];

	const buttons = [
		{
			title: 'ETH',
		},
		{
			title: 'BTC',
		},
		{
			title: 'CCR',
		},
	];

	return (
		<>
			<WalletStyled>
				<div className="title">
					<div className="sub_title">
						<h2>Wallet</h2>
						<h5>Here you can perform actions <br className="md_wordrap" />with translations</h5>
					</div>
					<div className="key_col">
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
				</div>
				<div className="btn_group">
					<div className="user_avartar">
						<div className="avartar">
							<UserIcon className="user_icon" />
						</div>
						<div className="user_desc">
							<h5 className="sub_desc">Account</h5>
							<span className="main_desc">megaNFTsEller</span><br />
						</div>
					</div>
					<div className="cards_group">
						{cards.map((card, i) => {
							return (
								<button className="" key={i}>
									<div className="btn_container">
										{card.svg}
										<span>{card.title}</span>
									</div>
								</button>
							)
						})}
					</div>
					<div className="mini_btn_group">
						{cards.map((card, i) => {
							return (
								<button className="mini_btn" key={i}>
									{card.title}
								</button>
							)
						})}
					</div>
				</div>
				<div className="via_telegram">
					<div className="telegram">
						<Telegram className="tege" />
						<label className="get_cript">Get Cript via <br className="via_tege" />Telegram bot</label>
					</div>
					<button className="get_ccr">Get CCR</button>
				</div>
				<div className="receive_ccr">
					<div className="input_body">
						<label className="title">Receive</label>
						<div className="confirm_pwd_input">
							<div className="ccr_col">
								<label className="cript">ETH</label>
								<input
									type="password"
									placeholder="12,543,543"
									className="ccr_input " />
								{buttons.map((button, i) => {
									return (
										<button className="mini_btn" key={i}>
											{button.title}
										</button>
									)
								})}
								<label className="values">$1 = 00.024 ETH</label>
							</div>
							<Arrow className="arrow" />
							<div className="usd_col">
								<label className="usd">USD($)</label>
								<input
									type="password"
									placeholder="124,535,343 (764.436,755CCR)"
									className="usd_input" />
								<label className="values_md">$1 = 00.024 ETH</label>
							</div>
						</div>
						<button className="receive_ccr">
							Receive CCR
						</button>
					</div>
				</div>
			</WalletStyled>
		</>
	);
}
export default Wallet;