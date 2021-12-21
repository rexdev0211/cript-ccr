import styled from "styled-components";
import tw from "twin.macro";

const UserHeaderStyled = styled.div.attrs({
  className: "border-b-2"
})`
  & {
    nav.navigation {
      ${tw`bg-gray-100`}
      & {
        div.nav_bar {
          ${tw`m-auto md:static lg:static xl:static md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl`}
          & {
            div.nav_container {
              ${tw`h-20 flex items-center justify-between`}
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
                      ${tw`xl:flex xl:items-center`}
                      & {
                        div.nav_maintitle {
                          ${tw`hidden xl:mx-3 xl:flex xl:items-center xl:space-x-4`}
                        }
                        div.nav_other {
                          ${tw`hidden md:ml-2 md:items-center md:flex md:h-12 xl:border-l-2 `}
                          & {
                            div.icon_desc {
                              ${tw`ml-2`}
                              span {
                                ${tw`text-sz-14`}
                              }
                              h5 {
                                ${tw`text-sz-10 text-gray-500`}
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                div.btn_group {
                  ${tw`flex items-center`}
                  & {
                    .user_icon {
                      ${tw`h-10 w-16`}
                    }
                    .log_out {
                      ${tw`hidden lg:block`}
                    }
                    .dropdown {
                      ${tw`-mr-2 flex xl:hidden`}
                      & {
                        .btn_dropdown
                        ${tw`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none focus:ring-2 `}
                      }
                    }
                    .avatar {
                      ${tw`mr-4`}
                    }
                  }
                }
              }
            }
          }
        }
        div.hidden_menu {
          ${tw`block xl:hidden`}
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
export default UserHeaderStyled;