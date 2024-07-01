import { useAppDispatch, useAppSelector } from '../../redux/types'
import {
    answerTheQuestion,
    questionsLength,
} from '../../redux/slices/questionSlice'
import { timerExpired } from '../../redux/slices/timerSlice'

export const useAnswer = (id: number) => {
    const testLength = useAppSelector(questionsLength)
    const dispatch = useAppDispatch()

    return (e: React.MouseEvent) => {
        const labels = document.querySelectorAll('label:has(input:checked)')
        const textarea = document.querySelector('textarea')

        if (testLength - 1 === id) {
            dispatch(timerExpired())
        }

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
}
