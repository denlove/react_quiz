import { useMatchTimer } from './useMatchTimer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { isExpired, saveTimer } from '../../../../redux/slices/timerSlice'
import { StyledTimer, Time } from './Timer.styles'
import { useAppSelector } from '../../../../redux/types'

const Timer = () => {
    const { time, isRunning, pause } = useMatchTimer()
    const isTimeExpired = useAppSelector(isExpired)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isRunning && !isTimeExpired) dispatch(saveTimer(`${time}`))
        else pause()
    })

    return (
        <StyledTimer>
            <Time>Left: {time}</Time>
        </StyledTimer>
    )
}

export default Timer
