import styled, { css } from 'styled-components'
import { QuestionStateType } from '../../types/types'

interface IStepBlock {
    state: QuestionStateType
}

const StyledStep = styled.span<IStepBlock>`
    width: 2rem;
    height: 0.5rem;
    ${({ state }) =>
        state === 'answered'
            ? css`
                  background-color: black;
              `
            : state === 'active'
              ? css`
                    background-color: red;
                `
              : css`
                    background-color: grey;
                `}
`

const StepBlock = ({ state }: IStepBlock) => {
    return <StyledStep state={state}></StyledStep>
}

export default StepBlock
