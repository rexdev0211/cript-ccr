import styled from "styled-components";
import tw from "twin.macro";

const AccountSettingStyled = styled.div.attrs({
  className: "mx-4 mb-10 mt-6 items-center md:mt-14 md:mb-16 lg:mb-16 lg:mb-20 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl md:m-auto"
})`
  & {
    div.title {
			${tw`text-center flex justify-center md:justify-between mt-10 md:text-left w-full`}
			& {
        div.subtitle {
          & {
            h2 {
              ${tw`text-sz-24 font-bold`}
            }
            span {
              ${tw`text-sz-14 text-gray-500`}
              & {
                br {
                  ${tw`md:hidden`}
                }
              }
            }
          }
        }
        div.key_mark {
					${tw`hidden md:text-left md:flex md:items-center`}
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
    div.user_icon {
      ${tw`flex justify-center mt-11 ml-6 xl:justify-start xl:ml-0`}
      & {
        button.edit_profile {
          ${tw`relative top-8 right-8`}
        }
      }
    }
    label {
      ${tw`flex w-full mt-10 md:w-2/5 md:pr-8 md:justify-end md:items-end xl:w-full xl:items-start xl:justify-self-start xl:justify-start xl:mt-8`}
    }
    div.nickname {
      ${tw`flex flex-col justify-center items-center xl:items-start`}
      & {
        input {
          ${tw`w-full md:w-1/2 px-4 h-14 py-2 mt-2 rounded-xl border focus:outline-none focus:ring-1 focus:ring-blue-600`}
        }
        button {
					${tw`w-full px-4 py-2 mt-6 bg-blue-600 rounded-3xl text-white hover:bg-blue-700 my-4 h-12 md:w-32`}
				}
      }
    }
  }
`;
export default AccountSettingStyled;