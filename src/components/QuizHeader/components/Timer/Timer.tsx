import styled from 'styled-components'
import { useMatchTimer } from './useMatchTimer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { saveTimer } from '../../../../redux/slices/timerSlice'

const StyledTimer = styled.span`
    color: blue;
    font-size: 30px;
`

const Timer = () => {
    const { time, isRunning } = useMatchTimer()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isRunning) dispatch(saveTimer(`${time}`))
    })

    return (
        <div>
            <StyledTimer>{time}</StyledTimer>
        </div>
    )
}

export default Timer
