import { styled } from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

/* Recheck if this positioning is the right way to go about */
export const BackgroundImage = styled.img`
  position: absolute;
  left: 2.75rem;
  top: 0.125rem;
  width: 15rem; /* 240px */ /* RRC: Not sure if this is right */
  height: 6.5rem; /* 104px */ /* RRC: Not sure if this is right */

  @media (min-width: ${DesktopWidth}) {
    left: -32.8rem;
    top: -20.875rem;
    width: 60.375rem; /* 966px */
    height: 59.0625rem; /* 945px */
  }
`;

export const MainImage = styled.img`
  position: absolute;
  top: -6.6875rem;
  left: 2.85rem;
  width: 14.4375rem; /* 231px */ /* RRC: Not sure if this is right */
  height: 10.9375rem; /* 175px */ /* RRC: Not sure if this is right */

  @media (min-width: ${DesktopWidth}) {
    top: 1.3125rem;
    left: -5.1875rem;
    width: 29.5rem; /* 472px */
    height: 22.4375rem; /* 359px */
  }
`;

export const BoxImage = styled.img`
  @media (min-width: ${DesktopWidth}) {
    position: absolute;
    left: -5.8rem;
    top: 9.5rem;
    z-index: 1;
    width: 11.9375rem; /* 191px */ /* RRC: Not sure if this is right */
    height: 11.5rem; /* 184px */ /* RRC: Not sure if this is right */
    display: block;
  }

  display: none;
`;
