import styled from "styled-components";
import tw from "twin.macro";

const SignUpStyled = styled.div.attrs({
  className: "mx-4 mb-10 mt-6 items-center sm:px-10 md:mt-12 md:mb-16 lg:mb-16 lg:mb-20 md:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-lg md:m-auto"
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
      ${tw`text-center md:text-left md:flex md:justify-between `}
      & {
        div.sub_title {
          & {
            h2 {
              ${tw`text-sz-32 font-bold`}
            }
            h5 {
              ${tw`text-gray-400 text-sz-16 font-normal text-center md:text-left`}
              & {
                .login_here {
                  ${tw`text-blue-600`}
                }
              }
            }
          }
        }
        div.key_col {
          ${tw`items-center flex text-center md:text-left mx-10 mt-8 justify-center md:justify-start md:ml-0 md:mt-0 md:mr-0`}
          & {
            div.key_svg {
              ${tw`border-r-2 pr-4 h-14 flex items-center`}
            }
            div.key_desc {
              ${tw`pl-4`}
              & {
                .key_title {
                  ${tw`text-sz-12 font-normal text-gray-400`}
                }
              }
            }
          }
        }
      }
    }
    form.signup_input {
      ${tw`justify-center items-center w-full shadow px-2 flex flex-col bg-gray-100 mt-8 rounded-2xl`}
      & {
        div.input_body {
          ${tw`w-full p-2 justify-start flex flex-col`}
          & {
            div.pwd_input {
              ${tw`mt-4`}
              & {
                div.pwd_title {
                  ${tw`flex justify-between`}
                  & {
                    label.subtitle {
                      ${tw`hidden md:block lg:block xl:block text-blue-400`}
                    }
                  }
                }
                input {
                  ${tw`w-full flex-wrap py-2 mt-2 border focus:outline-none focus:ring-1 focus:ring-blue-600 h-28 rounded-2xl`}
                }
                button {
                  ${tw`float-right`}
                  & {
                    .mark {
                      ${tw`hidden float-right relative -mt-10 md:block lg:block xl:block text-blue-400`}
                    }
                  }
                }
                label.generate {
                  ${tw`text-sz-12 md:hidden lg:hidden xl:hidden text-blue-400`}
                }
              }
            }
            div.confirm_pwd_input {
              ${tw`mt-4`}
              & {
                div.confirm_title {
                  ${tw`flex justify-between`}
                  & {
                    label.incorrect {
                      ${tw`hidden md:block lg:block xl:block text-red-500`}
                    }
                  }
                }
                input.confirm_pwd {
                  ${tw`w-full px-4 h-14 py-2 mt-2 rounded-2xl border focus:outline-none focus:ring-1 focus:ring-blue-600`}
                }
                label.incorrect_confirm {
                  ${tw`md:hidden lg:hidden xl:hidden text-sz-12 text-red-500`}
                }
              }
            }
            button.create_act {
              ${tw`px-4 py-2 bg-blue-600 rounded-3xl h-12 text-white hover:bg-blue-700 my-4 w-full`}
            }
          }
        }
      }
    }
    div.warning_container {
      ${tw`mt-20 mx-2 px-4 rounded-3xl border-dashed border-blue-700 border-2 py-5 md:flex md:items-center md:gap-5`}
      & {
        div.warning_mark {
          ${tw`justify-around flex mt-2 mb-4`}
          & {
            svg {
              ${tw`h-12 md:h-40`}
            }
          }
        }
        div.warning_desc {
          & {
            h4 {
              ${tw`text-sz-16 md:text-sz-24 font-normal text-blue-700`}
            }
            p {
              ${tw`text-sz-12 lg:text-sz-16 text-blue-700`}
            }
          }
        }
      }
    }
  }
`;
export default SignUpStyled;