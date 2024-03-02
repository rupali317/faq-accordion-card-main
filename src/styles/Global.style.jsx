import { createGlobalStyle } from "styled-components";

export const BaseStyles = createGlobalStyle`
    :root {
        /* Colors */
        --color-neutral-light-1: hsl(0, 0%, 100%); /* #ffffff */
        --color-neutral-light-2: hsl(240, 5%, 91%); /* #e8e8ea */
        --color-neutral-dark-1: hsl(238, 29%, 17%); /* #1e1f36 */
        --color-neutral-dark-2: hsl(237, 12%, 33%); /* #4b4c5f */
        --color-neutral-dark-3: hsl(240, 6%, 50%); /* #787887 */
        --color-hover: hsl(14, 88%, 65%); /* #f47b56 */
        --color-box-shadow: hsla(261, 75%, 27%, 49.72%); /* #35127a */
        --color-background: linear-gradient(hsl(273, 75%, 66%), hsl(240, 74%, 65%));
        
        /* Typography */
        --font-size-s: 0.75rem; /* 12px */
        --font-size-base: 0.8125rem; /* 13px */
        --font-size-m: 0.875rem; /* 14px */
        --font-size-l: 2rem; /* 32px */

        --font-weight-regular: 400;
        --font-weight-bold: 700;

        --line-height-s: 1.125rem; /* 18px */
        --line-height-auto: normal;

        /* Spacing */
        

        /* Borders */
        --border-radius-soft: 1.4375rem; /* 23px */
        --border-radius-none: 0rem;
        --border-width-s: 0.0625rem /* 1px */

        /* Shadows */
        --box-shadow: 0rem 3.125rem 3.125rem -1.25rem var(--color-box-shadow);       
    }
`;

export const ResetStyles = createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove default spaces */
    * {
        margin: 0;
        margin-block-end: 0;
        margin-block-start: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-block-end: 0;
        padding-block-start: 0;
        padding-inline-start: 0;
        padding-inline-end: 0;
    }

    /* Avoid text overflows */
    body,
    h1,
    p {
        overflow-wrap: break-word;
    }

    /* Prevent font size inflation */
    html {
        -moz-text-size-adjust: none;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /* Set shorter line heights on headings and interactive elements, Balance text wrapping on headings*/
    h1 {
        line-height: 1.1;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture,
    svg {
        max-width: 100%;
        display: block;
    }

    button {
        border-width: 0rem;
        font: inherit;
    }
`;

export const DefaultStyles = createGlobalStyle`
`;

// for the ::marker -> content: url();
