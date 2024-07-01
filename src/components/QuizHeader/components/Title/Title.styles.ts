import styled from 'styled-components'

const StyledTitle = styled.hgroup`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1 {
        font-size: var(--fs-30);
        color: var(--text-color-3);
    }

    p {
        font-size: var(--fs-20);
        color: var(--text-color-5);
    }
`

export { StyledTitle }
