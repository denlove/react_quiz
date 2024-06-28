import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InputType, QuestionStateType } from '../../types/types'
import { RootState } from '../store'

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

const initialState = [
    {
        id: 0,
        question: 'First question ................... First?',
        answer: {
            type: 'radio',
            variants: ['First answer', 'Second answer', 'Third answer'],
            result: [],
        },
        state: 'active',
    },
    {
        id: 1,
        question: 'Second question ................... Second?',
        answer: {
            type: 'checkbox',
            variants: ['First answer', 'Second answer', 'Third answer'],
            result: [],
        },
        state: 'default',
    },
    {
        id: 2,
        question: 'Third question ................... Third?',
        answer: {
            type: 'text',
            variants: [],
            result: [],
        },
        state: 'default',
    },
] satisfies Array<IQuestionState> as Array<IQuestionState>

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        answerTheQuestion: (
            state,
            { payload }: PayloadAction<{ id: number; result: Array<string> }>,
        ) => {
            state[payload.id].answer.result = payload.result
            if (state[payload.id + 1]) {
                state[payload.id].state = 'answered'
                state[payload.id + 1].state = 'active'
            }
        },
        addNewQuestion: (
            state,
            { payload }: PayloadAction<IQuestionState>,
        ) => {},
    },
})

export const { answerTheQuestion, addNewQuestion } = questionSlice.actions
export default questionSlice.reducer

export const questionsLength = (state: RootState) =>
    state.questionReducer.length
export const allQuestions = (state: RootState) => state.questionReducer
export const activeQuestion = (state: RootState) =>
    state.questionReducer.find(el => el.state === 'active')
