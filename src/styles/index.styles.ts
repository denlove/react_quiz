import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --bg-color-1: hsl(0, 0%, 17%);
        --bg-color-2: hsla(0, 0%, 0%, 0.2);
        --bg-color-3: hsl(0, 0%, 30%);

        --text-color-1: hsl(0, 0%, 95%);
        --text-color-2: hsl(0, 0%, 90%);
        --text-color-3: hsl(0, 0%, 80%);
        --text-color-4: hsl(0, 0%, 70%);
        --text-color-5: hsl(0, 0%, 50%);
        --text-color-6: hsl(0, 0%, 30%);
        --hover-link-1: hsl(0, 0%, 10%);

        --fs-16: 16px;
        --fs-18: 18px;
        --fs-20: 20px;
        --fs-25: 25px;
        --fs-30: 30px;

        --red-border: 1px solid red;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        background-color: var(--bg-color-1);
    }
`
