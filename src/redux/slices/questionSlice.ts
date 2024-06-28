import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InputType, QuestionStateType } from '../../types/types'
import { RootState } from '../store'
import { MOCK_DATA } from '../../utils/mock'
import { disableAnswer } from '../../handlers/disableAnswer'

export interface IQuestionState {
    id: number
    question: string
    answer: {
        type: InputType
        variants?: Array<string>
        result: Array<string>
    }
    state: QuestionStateType
}

const questionSlice = createSlice({
    name: 'question',
    initialState: MOCK_DATA.test,
    reducers: {
        answerTheQuestion: (
            state,
            { payload }: PayloadAction<{ id: number; result: Array<string> }>,
        ) => {
            state[payload.id].answer.result = payload.result
            if (state[payload.id + 1]) {
                state[payload.id].state = 'answered'
                state[payload.id + 1].state = 'active'
            } else {
                alert('Well done!')
                disableAnswer()
            }
        },
    },
})

export const { answerTheQuestion } = questionSlice.actions
export default questionSlice.reducer

export const questionsLength = (state: RootState) =>
    state.questionReducer.length
export const allQuestions = (state: RootState) => state.questionReducer
export const activeQuestion = (state: RootState) =>
    state.questionReducer.find(el => el.state === 'active')
