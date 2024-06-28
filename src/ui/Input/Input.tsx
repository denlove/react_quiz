import styled from 'styled-components'
import { InputType } from '../../types/types'

interface IInput extends React.HTMLProps<HTMLInputElement> {
    type: InputType
    value?: string
}

const StyledInput = styled.input`
    width: auto;
`

const Input = ({ ...props }: IInput) => {
    return <StyledInput {...props} />
}

export default Input
