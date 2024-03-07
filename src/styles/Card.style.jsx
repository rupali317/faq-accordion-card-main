import { styled } from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

/* Recheck if this positioning is the right way to go about */
export const BackgroundImage = styled.img`
  position: absolute;
  left: 2.75rem; /* 44px */
  top: 0.125rem; /* 2px */

  @media (min-width: ${DesktopWidth}) {
    left: -28.8rem;
    top: -15.875rem;
  }
`;

export const MainImage = styled.img`
  position: absolute;
  width: 72.5%;
  top: -6.6875rem; /* -107px; */
  left: 2.8125rem; /* 45px */

  @media (min-width: ${DesktopWidth}) {
    width: initial;
    top: 3.3125rem;
    left: -5.1875rem;
  }
`;

export const BoxImage = styled.img`
  @media (min-width: ${DesktopWidth}) {
    position: absolute;
    left: -5.5rem;
    top: 11.5rem;
    z-index: 1;
  }
`;
