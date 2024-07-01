import { useSelector } from 'react-redux'
import StepBlock from '../../../../ui/StepBlock/StepBlock'
import { questionsLength } from '../../../../redux/slices/questionSlice'
import { QuestionStateType } from '../../../../types/types'
import { StyledBar } from './ProgressBar.styles'

interface IProgressBar {
    activeTabId: number
}

const ProgressBar = ({ activeTabId }: IProgressBar) => {
    const length = useSelector(questionsLength)

    const stepState = (id: number, activeTabId: number): QuestionStateType => {
        if (id < activeTabId) return 'answered'
        else if (id === activeTabId) return 'active'
        else return 'default'
    }

    return (
        <StyledBar>
            {Array(length)
                .fill(0)
                .map((_, id) => {
                    return (
                        <StepBlock
                            key={id}
                            state={stepState(id, activeTabId)}
                        />
                    )
                })}
        </StyledBar>
    )
}

export default ProgressBar
