import { useRef } from 'react'
import { useSelector } from 'react-redux'
import Input from '../../ui/Input/Input'
import LabeledInput from './components/LabeledInput/LabeledInput'
import {
    IQuestionState,
    activeQuestion,
    answerTheQuestion,
} from '../../redux/slices/questionSlice'
import TextArea from '../../ui/TextArea/TextArea'
import ProgressBar from './components/ProgressBar/ProgressBar'
import { useAppDispatch } from '../../redux/types'

const AnswerForm = () => {
    const active = useSelector(activeQuestion)
    const dispatch = useAppDispatch()
    const fieldset = useRef<HTMLFieldSetElement>(null)
    const { id, question, answer } = active as IQuestionState

    const acceptAnswer = (e: React.MouseEvent) => {
        const labels = document.querySelectorAll('label:has(input:checked)')
        const textarea = document.querySelector('textarea')

        if (labels.length) {
            const result = [...labels].map(
                el => el.textContent,
            ) as Array<string>
            dispatch(answerTheQuestion({ id, result }))
        } else if (textarea?.value) {
            const result = [textarea.value]
            dispatch(answerTheQuestion({ id, result }))
        }
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <ProgressBar activeTabId={id} />
            <fieldset ref={fieldset} id='question-set'>
                <legend>{question}</legend>
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
            </fieldset>
            <div>
                <Input
                    id='answer-btn'
                    onClick={acceptAnswer}
                    type='button'
                    value='Answer'
                />
            </div>
        </form>
    )
}

export default AnswerForm
