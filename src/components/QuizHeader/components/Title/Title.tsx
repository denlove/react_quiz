import Heading from '../../../../ui/Heading/Heading'
import Paragraph from '../../../../ui/Paragraph/Paragraph'
import { MOCK_PARAGRAPH, MOCK_TITLE } from '../../../../utils/mock'

const Title = () => {
    return (
        <hgroup>
            <Heading role='h1' content={MOCK_TITLE} />
            <Paragraph content={MOCK_PARAGRAPH} />
        </hgroup>
    )
}

export default Title
