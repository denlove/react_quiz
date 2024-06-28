import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MOCK_DATA } from '../../utils/mock'
import { RootState } from '../store'

export interface ITimerState {
    time: string
    isExpired: boolean
}

const timerSlice = createSlice({
    name: 'timer',
    initialState: MOCK_DATA.timer,
    reducers: {
        saveTimer: (state, { payload }: PayloadAction<string>) => {
            state.time = payload
        },
        timerExpired: state => {
            state.time = '0:00'
            state.isExpired = true
            alert('Time is over')
        },
    },
})

export const { timerExpired, saveTimer } = timerSlice.actions
export default timerSlice.reducer

export const getTimer = (state: RootState) => state.timerReducer.time
