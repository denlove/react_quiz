import styled, { css } from 'styled-components'
import { QuestionStateType } from '../../types/types'

interface IStepBlock {
    state: QuestionStateType
}

const StyledStep = styled.span<IStepBlock>`
    ${({ state }) =>
        state === 'answered'
            ? css`
                  background-color: hsla(0, 0%, 50%, 0.2);
              `
            : state === 'active'
              ? css`
                    background-color: hsla(0, 50%, 50%, 0.3);
                `
              : css`
                    background-color: hsla(0, 0%, 50%, 0.1);
                `}
`

const StepBlock = ({ state }: IStepBlock) => {
    return <StyledStep state={state}></StyledStep>
}

export default StepBlock
