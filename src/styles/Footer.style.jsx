import { styled } from "styled-components";

export const Small = styled.small`
  color: var(--color-neutral-light-1);
`;

export const Link = styled.a`
  color: var(--color-neutral-light-1);
  font-weight: var(--font-weight-bold);

  &:hover {
    color: var(--color-hover-2);
  }

  &:focus,
  &:focus-visible {
    outline: var(--border-width-s) solid var(--color-neutral-light-1);
  }
`;
