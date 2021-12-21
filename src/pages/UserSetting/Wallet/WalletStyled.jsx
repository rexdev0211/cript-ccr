import styled from "styled-components";
import tw from "twin.macro";

const WalletStyled = styled.div.attrs({
    className: "mx-4 mb-10 mt-10 p-auto items-center md:mt-16 md:mb-16 lg:mb-16 lg:mb-20 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl md:m-auto"
})`
  & {
    div.title {
      ${tw`text-center md:text-left md:flex md:justify-between `}
      & {
        div.sub_title {
          & {
            h2 {
              ${tw`text-sz-24 font-bold`}
            }
            h5 {
              ${tw`text-sz-14 font-normal text-center text-gray-400 mt-2.5 md:text-left md:text-black`}
              & {
                .md_wordrap {
                  ${tw`md:hidden`}
                }
              }
            }
          }
        }
        div.key_col {
          ${tw`items-center flex text-center md:text-left mx-2 mt-8 justify-between md:justify-start md:ml-0 md:mt-0 md:mr-0`}
          & {
                        div.user_avartar {
                            ${tw`items-center flex md:hidden`}
                            & {
                                div.avartar {
                                    & {
                                        .user_icon {
                                            ${tw`h-12 w-12 xl:h-14 xl:w-14`}
                                        }
                                    }
                                }
                                div.user_desc {
                                    ${tw`ml-2 text-left`}
                                    & {
                                        .sub_desc {
                                            ${tw`text-sz-12 xl:text-sz-16`}
                                        }
                                        .main_desc {
                                            ${tw`text-sz-14 font-bold xl:text-sz-16`}
                                        }
                                    }
                                }
                            }
                        }
                        div.key_mark {
                            ${tw`text-left flex items-center`}
                            & {
                                div.key_svg {
                                    ${tw`border-r-2 pr-2 h-14 flex items-center`}
                                }
                                div.key_desc {
                                    ${tw`pl-2`}
                                    & {
                                        span {
                                            ${tw`text-sz-12 md:text-sz-20 font-bold`}
                                        }
                                        .key_title {
                                            ${tw`text-sz-10 md:text-sz-12 font-normal text-gray-400`}
                                        }
                                        .key_balance {
                                            ${tw`hidden md:text-sz-12 md:font-normal md:text-gray-400 md:block`}
                                        }
                                    }
                                }
                            }
                        }
          }
        }
      }
    }
    div.btn_group {
            ${tw`md:mt-11 flex justify-between`}
            & {
                div.cards_group {
                    ${tw`hidden md:flex md:justify-between md:w-full xl:w-3/5`}
                    button{
                        ${tw`px-6 py-2 m-4 inline bg-white text-gray-500 text-sz-16 font-bold w-52 h-20 rounded-2xl    border-2 border-gray-500 hover:border-blue-500    hover:text-black hover:shadow-md
                        hover:scale-110`}
                        & {
                            .btn_container {
                                    ${tw`flex justify-around items-center`}
                            }
                        }
                    }
                }    
                div.user_avartar {
                    ${tw`hidden xl:items-center  xl:flex`}
                    & {
                        div.avartar {
                            & {
                                .user_icon {
                                    ${tw`h-14 w-14`}
                                }
                            }
                        }
                        div.user_desc {
                            ${tw`ml-2`}
                            & {
                                .sub_desc {
                                    ${tw`text-sz-16`}
                                }
                                .main_desc {
                                    ${tw`text-sz-20 font-bold`}
                                }
                            }
                        }
                    }
                }
                div.mini_btn_group {
                    ${tw`flex justify-between w-full md:hidden`}
                    & {
                        button.mini_btn {
                            ${tw`h-9 w-24 text-sz-14 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white focus:text-white focus:bg-gray-700 border border-gray-700 hover:border-transparent rounded-3xl ml-2 mt-4`}
                        }
                    }
                }
            }
    }
        div.via_telegram {
            & {
                div.telegram {
                    ${tw`h-56 border-2 border-blue-600 mt-20 items-center justify-center rounded-2xl flex-col flex gap-4`}
                    & {
                        .tege {
                            ${tw`content-end`}
                        }
                        .get_cript {
                            ${tw`text-sz-24 font-bold`}
                            & {
                                .via_tege {
                                    ${tw`md:hidden`}
                                }
                            }
                        }
                    }
                }
                button.get_ccr {
                    ${tw`px-4 py-2 bg-blue-600 rounded-3xl h-12 text-white hover:bg-blue-700 my-4 w-full`}
                }
            }
        }
        form.receive_ccr {
            ${tw`mb-10 mt-10 h-80 p-8 rounded-2xl bg-gray-100 md:flex md:flex-wrap md:justify-between`}
            & {
                button.receive_ccr {
                    ${tw`px-4 py-2 bg-blue-600 rounded-3xl h-12 text-white hover:bg-blue-700 my-4 w-full`}
                }
            }
        }
        div.receive_ccr {
      ${tw`mb-10 mt-10 p-2 md:p-8 rounded-2xl bg-gray-100 md:flex md:flex-wrap md:justify-between`}
      & {
        div.input_body {
          ${tw`w-full p-2 justify-start flex flex-col`}
          & {
                        label.title {
                            ${tw`text-sz-20 font-bold`}
                        }
            div.confirm_pwd_input {
              ${tw`flex-col mt-4 flex gap-8 items-center md:flex md:justify-between md:flex-row`}
                            & {
                                div.ccr_col {
                                    ${tw`w-full xl:mt-1.5`}
                                    & {
                                        input.ccr_input {
                                            ${tw`w-full px-4 h-14 py-2 mt-2 rounded-2xl border focus:outline-none focus:ring-1 focus:ring-blue-600`}
                                        }
                                        button.mini_btn {
                                            ${tw`h-7 w-12 text-sz-14 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white focus:text-white focus:bg-gray-700 border border-gray-700 hover:border-transparent rounded-3xl ml-2 mt-4`}
                                        }
                                        label.values {
                                            ${tw`text-green-500 text-sz-16 flex justify-end float-right mt-5 md:hidden xl:block`}
                                        }
                                    }
                                }
                                .arrow {
                                    ${tw`hidden md:w-12 md:mb-2.5 md:block`}
                                }
                                div.usd_col {
                                    ${tw`w-full xl:mb-9`}
                                    & {
                                        input.usd_input {
                                            ${tw`w-full px-4 h-14 py-2 mt-2 rounded-2xl border focus:outline-none focus:ring-1 focus:ring-blue-600`}
                                        }
                                        label.values_md {
                                            ${tw`hidden md:text-green-500 md:text-sz-16 md:flex md:justify-end md:float-right md:mt-5 xl:hidden`}
                                        }
                                    }
                                }
                            }
            }
            button.receive_ccr {
              ${tw`px-4 py-2 bg-blue-600 rounded-3xl h-12 text-white hover:bg-blue-700 my-4 w-full`}
            }
          }
        }
      }
    }
  }
`;
export default WalletStyled;