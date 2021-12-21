import styled from "styled-components";
import tw from "twin.macro";

const AuthHeaderStyled = styled.div.attrs({
  className: "border-b-2"
})`
  & {
    nav.navigation {
      ${tw`bg-gray-100`}
      & {
        div.nav_bar {
          ${tw`mx-4 md:m-auto md:static lg:static xl:static md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl`}
          & {
            div.nav_container {
              ${tw`flex items-center justify-between h-20`}
              & {
                div.nav_titles {
                  ${tw`flex items-center`}
                  & {
                    div.nav_logo {
                      ${tw`flex-shrink-0 flex md:border-r-2 md:pr-6`}
                      & {
                        .logo_svg {
                          ${tw`flex items-center p-2`}
                        }
                        li.flex {
                          .logo_title {
                            ${tw`flex items-center px-4 border-b-2 border-transparent text-sz-20 -m-5 font-semibold tracking-wider`}
                          }
                        }
                      }
                    }
                    div.nav_subtitles {
                      ${tw`hidden xl:flex xl:items-center`}
                      & {
                        div.nav_maintitle {
                          ${tw`ml-3 flex items-center space-x-4`}
                          & {
                            div.nav_other {
                              ${tw`border-l-2 items-center flex h-12`}
                            }
                          }
                        }
                      }
                    }
                  }
                }
                div.btn_group {
                  ${tw`flex`}
                  & {
                    .btn_create {
                      ${tw`h-10 w-20 justify-center border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-sz-14 font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 rounded-3xl hidden lg:block`}
                    }
                    .btn_login {
                      ${tw`h-10 w-20 ml-5 bg-white py-2 px-3 border border-gray-300 shadow-sm text-sz-14 rounded-3xl leading-4 font-medium text-gray-700 hover:bg-blue-50 focus:outline-none xl:h-10`}
                    }
                    .btn_signup {
                      ${tw`h-10 w-20 ml-5 bg-white py-2 px-3 border border-gray-300 shadow-sm text-sz-14 leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none rounded-3xl hidden lg:block`}
                    }
                    .dropdown {
                      ${tw`-mr-2 flex xl:hidden`}
                      & {
                        .btn_dropdown
                        ${tw`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none focus:ring-2 `}
                      }
                    }
                  }
                }
              }
            }
          }
        }
        div.hidden_menu {
          ${tw`xl:hidden`}
          & {
            div {
              ${tw`px-2 pt-2 pb-3 space-y-1 sm:px-3`}
              & {
                .main {
                  ${tw`flex items-center px-4 -mb-1`}
                }
                .valid {
                  ${tw`flex items-center px-4 -mb-1`}
                }
              }
            }
          }
        }
      }
  }
`;
export default AuthHeaderStyled;