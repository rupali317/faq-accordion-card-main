import { createGlobalStyle } from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const BaseStyles = createGlobalStyle`
    :root {
        /* Colors */
        --color-neutral-light-1: hsl(0, 0%, 100%); /* #ffffff */
        --color-neutral-light-2: hsl(240, 5%, 91%); /* #e8e8ea */
        --color-neutral-dark-1: hsl(238, 29%, 17%); /* #1e1f36 */
        --color-neutral-dark-2: hsl(237, 12%, 33%); /* #4b4c5f */
        --color-neutral-dark-3: hsl(240, 6%, 50%); /* #787887 */
        --color-hover-1: hsl(14, 88%, 65%); /* #f47b56 */
        --color-hover-2: hsl(56, 95%, 56%); /* #f9eb24 */
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
        --line-height-normal: normal;

        /* Spacing */
        --space-xs-1: 0.0625rem; /* 1px */
        --space-s-1: 0.6875rem; /* 11px */
        --space-s-2: 0.75rem; /* 12px */
        --space-base-1: 1rem; /* 16px */
        --space-base-2: 1.0625rem; /* 17px */
        --space-base-3: 1.125rem; /* 18px */
        --space-base-4: 1.1875rem; /* 19px */
        --space-m-1: 1.5rem; /* 24px */
        --space-m-2: 2rem; /* 32px */
        --space-l-1: 2.8125rem; /* 45px */
        --space-l-2: 3rem; /* 48px */
        --space-l-3: 4.0625rem; /* 65px */
        --space-xl-1: 5.1875rem; /* 83px */
        --space-xl-2: 5.9375rem; /* 95px */
        --space-xl-3: 8.25rem; /* 132px */
        --space-xl-4: 9.25rem; /* 148px */
        --space-xl-5: 29.6875rem; /* 475px */

        /* Borders */
        --border-radius-soft: 1.4375rem; /* 23px */
        --border-radius-none: 0rem;
        --border-width-s: 0.0625rem; /* 1px */

        /* Shadows */
        --box-shadow-1: 0rem 3.125rem 3.125rem -1.25rem var(--color-box-shadow);   /* 0px 50px 50px -20px */
    }

    @font-face {
        font-family: "Kumbh Sans";
        src: url("/fonts/KumbhSans-Bold.ttf") format("truetype");
        font-weight: 700;
        font-display: swap;
    }

    @font-face {
        font-family: "Kumbh Sans";
        src: url("/fonts/KumbhSans-Regular.ttf") format("truetype");
        font-weight: 400;
        font-display: swap;
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
`;

export const DefaultStyles = createGlobalStyle`
    body {
        font-family: "Kumbh Sans", sans-serif;
        font-weight: var(--font-weight-regular);
        background: var(--color-background);
        display: flex;
        flex-direction: column;
        gap: var(--space-l-2);
        padding-top: var(--space-xl-4);
        padding-bottom: var(--space-base-1);
        justify-content: center;
        align-items: center;
    }

    main {
        background-color: var(--color-neutral-light-1);
        border-radius: var(--border-radius-soft);
        padding: var(--space-xl-3) var(--space-m-1) var(--space-l-2);
        box-shadow: var(--box-shadow-1);
        max-width: 20.4375rem; /* 327px */ /* RRC: Check this max-width, min-width and undertand the usage */
        position: relative; /* Recheck if this positioning is the right way to go about in Card.style.jsx */
    }

    #root {
        position: relative;
    }

    footer {
        text-align: center;
        max-width: 70%;
    }

    @media (min-width: ${DesktopWidth}) {
        main {
            clip-path: border-box;
            padding: var(--space-l-3) var(--space-xl-2) var(--space-xl-1) var(--space-xl-5);
            max-width: initial;
        }
    }
`;
