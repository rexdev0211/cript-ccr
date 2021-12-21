import styled from "styled-components";
import tw from "twin.macro";

const SubHeaderStyled = styled.div.attrs({
  className: "border-b-2"
})`
  & {
    nav.navigation {
      ${tw`h-14 flex justify-between items-center md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl md:m-auto`}
      & {
        div.main_nav {
          ${tw`w-full flex justify-between items-center md:w-1/2 lg:w-2/5 xl:w-1/3`}
          & {
            li {
              ${tw`flex h-14`}
              & {
                .subtitle {
                  ${tw`flex items-center px-4 -mb-1 text-sz-16 text-gray-500`}
                }
                .active {
                  ${tw`text-black font-bold border-b-4 border-b-blue-500`}
                }
              }
            }
          }
        }
        div.other_nav {
          ${tw`hidden md:flex`}
          & {
            li {
              ${tw`flex h-14`}
              & {
                .subtitle {
                  ${tw`flex items-center px-4 -mb-1 text-sz-16 text-gray-500`}
                }
                .active {
                  ${tw`text-black font-bold border-b-4 border-b-blue-500`}
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default SubHeaderStyled;