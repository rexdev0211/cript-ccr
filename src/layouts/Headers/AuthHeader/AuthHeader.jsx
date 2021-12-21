import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from '@headlessui/react'
import AuthHeaderStyled from './AuthHeaderStyled';

import { ReactComponent as ReactLogo } from './../../../assets/svg/Logo.svg';

const AuthHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    {
      title: 'Launchpad',
      url: 'https://gosomewhere.com'
    },
    {
      title: 'Tops',
      url: 'https://gosomewhere.com'
    },
    {
      title: 'Marketplace',
      url: 'https://gosomewhere.com'
    },
    {
      title: 'Deals',
      url: 'https://gosomewhere.com'
    },
    {
      title: 'White Paper',
      url: 'https://gosomewhere.com'
    },
  ];

  return (
    <AuthHeaderStyled>
      <nav className="navigation">
        <div className="nav_bar">
          <div className="nav_container">
            <div className="nav_titles">
              <div className="nav_logo">
                <Link to="https://gosomewhere.com" aria-label="Back to homepage" className="logo_svg">
                  <ReactLogo />
                </Link>
                <li className="flex">
                  <Link to="https://gosomewhere.com" className="logo_title">CriptCCR</Link>
                </li>
              </div>
              <div className="nav_subtitles">
                <div className="nav_maintitle">
                  {menus.map((menu, i) => {
                    return (
                      <li className="flex" key={i}>
                        <Link to={menu.url} className="flex items-center px-2 -mb-1">{menu.title}</Link>
                      </li>
                    )
                  })}
                  <div className="nav_other">
                    <li className="flex">
                      <Link to="https://gosomewhere.com" className="flex items-center px-4 -mb-1">Validation</Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn_group">
              <button
                type="button"
                className="btn_create"
              >
                Create
              </button>
              <button
                type="button"
                className="btn_login"
              >
                Log In
              </button>
              <button
                type="button"
                className="btn_signup"
              >
                Sign Up
              </button>
              <div className="dropdown">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="btn_dropdown"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="hidden_menu" id="mobile-menu">
              <div ref={ref}>
                {menus.map((menu, i) => {
                  return (
                    <li className="flex" key={i}>
                      <Link to={menu.url} className="main">{menu.title}</Link>
                    </li>
                  )
                })}
                <li className="flex">
                  <Link to="https://gosomewhere.com" className="valid">Validation</Link>
                </li>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </AuthHeaderStyled>
  );
}
export default AuthHeader;