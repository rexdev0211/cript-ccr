import styled from "styled-components";
import tw from "twin.macro";

const SignInStyled = styled.div.attrs({
  className: "mx-6 mb-10 mt-6 items-center md:m-auto md:mt-12 md:mb-16 lg:mb-16 lg:mb-20 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg"
})`
  & {
    div.back {
      ${tw`flex flex-row mb-6 items-baseline xl:hidden lg:hidden md:hidden`}
      & {
        span {
          ${tw`text-sz-16 font-normal ml-2.5`}
        }
      }
    }
    div.title {
      & {
        h2 {
          ${tw`text-sz-32 text-center md:text-left font-bold`}
        }
        h5 {
          ${tw`text-gray-400 text-sz-16 font-normal text-center md:text-left`}
          & {
            .create_act {
              ${tw`text-blue-600`}
            }
          }
        }
      }
    }
    form.login_input {
      ${tw`justify-center items-center w-full shadow px-2 flex flex-col m-auto mt-8 rounded-2xl bg-gray-100`}
      & {
        div.container {
          ${tw`w-full p-2 justify-start flex flex-col`}
          & {
            div.input {
              ${tw`mt-4`}
              & {
                input {
                  ${tw`w-full px-4 py-2 mt-2 border focus:outline-none focus:ring-1 rounded-2xl h-14`}
                }
              }
            }
            button.login_btn {
              ${tw`px-4 py-2 mt-6 rounded-3xl h-12 bg-blue-600 text-white hover:bg-blue-700 my-4 w-full`}
            }
          }
        }
      }
    }
  }
`;
export default SignInStyled;