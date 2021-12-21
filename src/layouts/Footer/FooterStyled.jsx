import styled from "styled-components";
import tw from "twin.macro";

const FooterStyled = styled.div.attrs({
  className: "bg-gray-50 border-t-2 border-fuchsia-600 md:static lg:static xl:static"
})`
  & {
    div.footer {
      ${tw`flex flex-col mx-6 py-10 lg:flex-row lg:space-y-0 md:grid md:grid-cols-3 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xl:grid-cols-4 xl:grid md:m-auto`}
      & {
        div.logo_col {
          & {
            div.logo_header {
              ${tw`flex`}
              & {
                .logo {
                  ${tw`flex items-center px-2`}
                }
                .logo_desc {
                  ${tw`flex items-center px-4 border-b-2 border-transparent text-sz-20 -m-5 font-semibold tracking-wider`}
                }
              }
            }
            div.logo_body {
              ${tw`mt-5 md:mt-5`}
            }
          }
        }
        div.other_col {
          ${tw`md:col-span-2 md:grid-cols-3 md:grid xl:col-span-3 xl:grid-cols-4`}
          & {
            div.nav_col {
              ${tw`md:grid md:col-span-2 xl:col-span-3`}
              & {
                div.nav_header {
                  ${tw`md:items-center md:flex xl:items-center xl:flex`}
                  & {
                    h3 {
                      ${tw`tracking-wide text-sz-16 font-normal mt-7 md:mt-0 lg:mt-0 xl:mt-0`}
                    }
                  }
                }
                div.nav_body {
                  ${tw`grid grid-cols-3 flex justify-around md:justify-between mt-7 mb-7 md:pr-12 lg:pr-24`}
                  & {
                    ul {
                      ${tw`space-y-4 text-sz-14 font-bold text-gray-500`}
                    }
                    div.body_1 {
                      & {
                        ul {
                          & {
                            li.other {
                              ${tw`xl:hidden`}
                            }
                          }
                        }
                      }
                    }
                    div.body_2 {
                      & {
                        ul {
                          & {
                            li.other {
                              ${tw`xl:hidden`}
                            }
                          }
                        }
                      }
                    }
                    div.body_3 {
                      ${tw`hidden md:hidden xl:block`}
                    }
                  }
                }
              }
            }
            div.token_col {
              ${tw`mt-4 md:mt-0 md:col-span-1 lg:mt-0 xl:mt-0 xl:col-span-1`}
              & {
                div.token_header {
                  ${tw`md:items-center md:grid`}
                  & {
                    h3 {
                      ${tw`tracking-wide text-sz-16 font-normal hidden md:block`}
                    }
                  }
                }
                div.token_body {
                  ${tw`justify-start md:items-center md:mt-7`}
                  & {
                    button.btn_validation {
                      ${tw`w-full inline-flex justify-center border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-3xl text-sz-14 font-normal h-10`}
                    }
                    button.btn_create {
                      ${tw`w-full bg-white py-2 px-3 border border-gray-300 shadow-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none rounded-3xl text-sz-14 h-10 mt-1.5`}
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .copyright {
      ${tw`py-4 text-center hidden border-t-2 text-gray-500 md:block lg:block xl:block`}
    }
  }
`;
export default FooterStyled;