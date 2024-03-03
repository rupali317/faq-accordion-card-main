import { styled } from "styled-components";

export const Summary = styled.summary`
    padding-left: var(--space-xs-1);
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
`;

export const Divider = styled.hr`
    border: var(--border-width-s) solid var(--color-neutral-light-2);
`;
// for the ::marker -> content: url();
