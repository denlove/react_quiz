import { IQuestionState } from '../redux/slices/questionSlice'
import { ITimerState } from '../redux/slices/timerSlice'

export interface IChildParams {
    children: React.ReactNode
}

export interface IContent<T> {
    content: T
}

export interface ImockData {
    timer: ITimerState
    test: Array<IQuestionState>
}
