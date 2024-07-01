import styled from 'styled-components'

const StyledBar = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    span {
        width: 2rem;
        aspect-ratio: 3 / 1;
        border-radius: 1rem;
    }
`

export { StyledBar }
