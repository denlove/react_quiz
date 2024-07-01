import { InputType } from '../../../../types/types'
import Input from '../../../../ui/Input/Input'
import { StyledLabel } from './LabeledInput.styles'

interface ILabeledInput extends React.HTMLProps<HTMLInputElement> {
    text: string
    type: InputType
}

const LabelInput = ({ id, name, text, type }: ILabeledInput) => {
    return (
        <StyledLabel>
            <Input id={id} name={name} type={type} required />
            {text}
        </StyledLabel>
    )
}

export default LabelInput
