import { getTimer } from '../../redux/slices/timerSlice'
import { useAppSelector } from '../../redux/types'
import Timer from './components/Timer/Timer'
import Title from './components/Title/Title'

const QuizHeader = () => {
    const timer = useAppSelector(getTimer)

    return (
        <article>
            <header>
                <Title />
                {timer && <Timer />}
            </header>
        </article>
    )
}

export default QuizHeader
