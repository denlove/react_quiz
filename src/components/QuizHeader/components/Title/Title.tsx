import Heading from '../../../../ui/Heading/Heading'
import Paragraph from '../../../../ui/Paragraph/Paragraph'
import { MOCK_PARAGRAPH, MOCK_TITLE } from '../../../../utils/mock'
import { StyledTitle } from './Title.styles'

const Title = () => {
    return (
        <StyledTitle>
            <Heading role='h1' content={MOCK_TITLE} />
            <Paragraph content={MOCK_PARAGRAPH} />
        </StyledTitle>
    )
}

export default Title
