import { getTimer } from '../../redux/slices/timerSlice'
import { useAppSelector } from '../../redux/types'
import { StyledArticle, TitleHeader } from './QuizHeader.styles'
import Timer from './components/Timer/Timer'
import Title from './components/Title/Title'

const QuizHeader = () => {
    const timer = useAppSelector(getTimer)

    return (
        <StyledArticle>
            <TitleHeader>
                <Title />
                {timer && <Timer />}
            </TitleHeader>
        </StyledArticle>
    )
}

export default QuizHeader
