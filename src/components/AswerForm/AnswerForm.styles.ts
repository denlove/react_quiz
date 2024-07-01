import styled from 'styled-components'

const StyledForm = styled.form`
    flex-grow: 4;
    margin-top: 2rem;
`

const FieldSet = styled.fieldset`
    border: none;
    outline: none;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;

    textarea {
        background-color: var(--bg-color-2);
        outline: none;
        border: 2px solid var(--bg-color-2);
        border-radius: 1rem;
        padding: 1rem;
        width: 20rem;
        resize: vertical;
        color: var(--text-color-4);

        &:focus {
            border: 2px solid var(--bg-color-3);
        }
    }
`

const Question = styled.legend`
    color: var(--text-color-2);
    font-size: var(--fs-25);
    margin-bottom: 1rem;
    user-select: none;
`

const FormButtons = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    input[type='button'] {
        font-size: var(--fs-18);
        color: var(--text-color-5);
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        border: none;
        cursor: pointer;
        background-color: var(--bg-color-2);
        transition: all 0.1s linear;

        &:enabled:hover {
            scale: 0.95;
        }

        &:disabled {
            opacity: 0.5;
            cursor: default;
        }
    }
`

export { StyledForm, FieldSet, Question, FormButtons }
