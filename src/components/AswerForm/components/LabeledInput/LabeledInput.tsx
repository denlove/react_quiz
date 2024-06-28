import { InputType } from '../../../../types/types'
import Input from '../../../../ui/Input/Input'

interface ILabeledInput extends React.HTMLProps<HTMLInputElement> {
    text: string
    type: InputType
}

const LabelInput = ({ id, name, text, type }: ILabeledInput) => {
    return (
        <label>
            <Input id={id} name={name} type={type} required />
            {text}
        </label>
    )
}

export default LabelInput
