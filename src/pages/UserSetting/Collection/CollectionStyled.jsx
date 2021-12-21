import styled from "styled-components";
import tw from "twin.macro";

const CollectionStyled = styled.div.attrs({
	className: "mx-4 mb-10 mt-6 items-center md:mt-16 md:mb-16 lg:mb-16 lg:mb-20 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl md:m-auto"
})`
  & {
    div.title {
			${tw`text-center mt-10 md:text-left`}
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
		div.account_info {
			${tw`items-center flex text-center md:text-left mx-2 mt-10 justify-between md:justify-start md:ml-0 md:mr-0 md:float-right md:relative md:-mt-16`}
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
		div.description {
			${tw`text-center mt-20`}
			& {
				span {
					${tw`text-sz-16 font-weight[500] text-gray-500`}
					& {
						br {
							${tw`hidden md:block`}
						}
					}
				}
			}
		}
		div.invest {
			${tw`mt-10  flex justify-center`}
			& {
				button {
					${tw`px-4 py-2 bg-blue-600 rounded-3xl text-white hover:bg-blue-700 my-4 h-10 w-72`}
				}
			}
		}
  }
`;
export default CollectionStyled;