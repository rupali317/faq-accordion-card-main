import { styled } from "styled-components";

export const Summary = styled.summary`
  padding-left: var(--space-xs-1);
  font-size: var(--font-size-base);
  color: var(--color-neutral-dark-2);
  line-height: var(--line-height-normal);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: var(--color-hover-1);
    cursor: pointer;
  }

  &::marker {
    content: "";
  }

  [open] & {
    font-weight: var(--font-weight-bold);
    color: var(--color-neutral-dark-1);
  }
`;

export const ArrowImage = styled.img`
  /* RRC: Experiment if the icon can be rotated like in a full circle from open to closed state ? */
  transition: transform 0.2s ease;

  [open] & {
    transform: rotate(180deg);
    transition: transform 0.2s linear;
  }
`;

export const Section = styled.section`
  min-width: 17.5rem; /* 280px */ /* RRC: Check this max-width, min-width and undertand the usage */
`;

export const Details = styled.details`
  padding-top: var(--space-base-4);
  padding-bottom: var(--space-base-3);

  &[open] {
    padding-top: var(--space-base-2);
    padding-bottom: var(--space-base-1);
  }
`;

export const Paragraph = styled.p`
  padding-top: var(--space-s-2);
  font-size: var(--font-size-s);
  color: var(--color-neutral-dark-3);
  line-height: var(--line-height-s);
`;

export const Divider = styled.hr`
  border: var(--border-width-s) solid var(--color-neutral-light-2);
`;

export const MainHeading = styled.h1`
  font-size: var(--font-size-l);
  color: var(--color-neutral-dark-1);
  line-height: var(--line-height-normal);
  font-weight: var(--font-weight-bold);
  text-align: center;
  margin-bottom: 0.8125rem; /* 13px */
`;
