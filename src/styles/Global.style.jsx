import { createGlobalStyle } from "styled-components";

export const BaseStyles = createGlobalStyle`
    :root {
        /* Colors */
        /* Typography */
        /* Spacing */
        /* Borders */
        
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
