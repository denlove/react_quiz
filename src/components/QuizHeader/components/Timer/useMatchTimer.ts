import { useTimer } from 'react-timer-hook'
import { getTimer, timerExpired } from '../../../../redux/slices/timerSlice'
import { useAppDispatch, useAppSelector } from '../../../../redux/types'
import { convertStringTimeToMilis } from './convertStringTimeToMilis'
import { disableAnswer } from '../../../../handlers/disableAnswer'

export const useMatchTimer = () => {
    const timer = useAppSelector(getTimer)
    const dispatch = useAppDispatch()

    const expireHandle = () => {
        dispatch(timerExpired())
        disableAnswer()
    }

    const { hours, minutes, seconds, isRunning } = useTimer({
        expiryTimestamp: convertStringTimeToMilis(timer),
        onExpire: expireHandle,
    })

    let time = `${hours}:${minutes}:${seconds}`

    return { time, isRunning }
}
