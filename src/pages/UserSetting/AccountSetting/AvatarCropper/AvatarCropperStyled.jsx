import styled from "styled-components";
import tw from "twin.macro";

const AvatarCropperStyled = styled.div.attrs({
  className: "mx-4 mb-10 mt-6 items-center md:mt-14 md:mb-16 lg:mb-16 lg:mb-20 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl md:m-auto"
})`
  & {
    .slider {
      ${tw`h-64`}
    }
  }
`;
export default AvatarCropperStyled;