import styled from 'styled-components'
import { IContent } from '../../types/interfaces'

const StyledQuestion = styled.p`
    font-weight: normal;
`

const Question = ({ content }: IContent<string>) => {
    return <StyledQuestion>{content}</StyledQuestion>
}

export default Question
