import AnswerForm from '../../components/AswerForm/AnswerForm'
import QuizHeader from '../../components/QuizHeader/QuizHeader'
import { StyledMain } from './Quiz.styles'

const Quiz = () => {
    return (
        <StyledMain>
            <QuizHeader />
            <AnswerForm />
        </StyledMain>
    )
}

export default Quiz
