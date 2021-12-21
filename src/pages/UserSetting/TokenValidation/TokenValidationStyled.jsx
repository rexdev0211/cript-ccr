import styled from "styled-components";
import tw from "twin.macro";

const TokenValidationStyled = styled.div.attrs({
	className: "mx-4 mb-10 mt-6 items-center md:mt-14 md:mb-16 lg:mb-16 lg:mb-20 md:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-lg md:m-auto"
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
  }
`;
export default TokenValidationStyled;