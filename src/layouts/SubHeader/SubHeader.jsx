import React from "react";
import SubHeaderStyled from './SubHeaderStyled';

const SubHeader = ({ selectedMenu, handleSelectMenu }) => {

	const sub_titles = [
		{
			id: 1,
			title: 'Wallet',
		},
		{
			id: 2,
			title: 'Collection',
		},
		{
			id: 3,
			title: 'Token Validation',
		}
	];

	return (
		<SubHeaderStyled>
			<nav className="navigation">
				<div className="main_nav">
					{sub_titles.map((sub_title, i) => {
						return (
							<li className="flex" key={i}>
								<button className={`subtitle ${sub_title.id === selectedMenu ? 'active' : ''}`} onClick={() => handleSelectMenu(sub_title.id)}>{sub_title.title}</button>
							</li>
						)
					})}

				</div>
				<div className="other_nav">
					<li className="flex">
						<button className={`subtitle ${selectedMenu === 4 ? 'active' : ''}`} onClick={() => handleSelectMenu(4)}>Account Setting</button>
					</li>
				</div>
			</nav>
		</SubHeaderStyled >
	);
}
export default SubHeader;