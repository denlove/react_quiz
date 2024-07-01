import { useRef } from 'react'
import Input from '../../ui/Input/Input'
import LabeledInput from './components/LabeledInput/LabeledInput'
import {
    IQuestionState,
    activeQuestion,
} from '../../redux/slices/questionSlice'
import TextArea from '../../ui/TextArea/TextArea'
import ProgressBar from './components/ProgressBar/ProgressBar'
import { useAppSelector } from '../../redux/types'
import {
    FieldSet,
    FormButtons,
    Question,
    StyledForm,
} from './AnswerForm.styles'
import { useAnswer } from './useAnswer'
import { isExpired } from '../../redux/slices/timerSlice'

const AnswerForm = () => {
    const active = useAppSelector(activeQuestion)
    const isTheEnd = useAppSelector(isExpired)
    const fieldset = useRef<HTMLFieldSetElement>(null)
    const { id, question, answer } = active as IQuestionState
    const acceptAnswer = useAnswer(id)

    return (
        <StyledForm onSubmit={e => e.preventDefault()}>
            <ProgressBar activeTabId={id} />
            <FieldSet ref={fieldset} id='question-set'>
                <Question>
                    {`${id + 1}. `}
                    {question}
                </Question>
                {answer.type !== 'text' ? (
                    answer.variants?.map((el, id) => (
                        <LabeledInput
                            key={id}
                            id={`${id}-${answer.type}`}
                            name='variant'
                            type={answer.type}
                            text={el}
                        />
                    ))
                ) : (
                    <TextArea />
                )}
            </FieldSet>
            <FormButtons>
                <Input
                    id='answer-btn'
                    onClick={acceptAnswer}
                    type='button'
                    value='Answer'
                    disabled={isTheEnd}
                />
            </FormButtons>
        </StyledForm>
    )
}

export default AnswerForm
