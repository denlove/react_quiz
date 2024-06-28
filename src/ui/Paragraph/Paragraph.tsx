import { IContent } from '../../types/interfaces'

const Paragraph = ({ content }: IContent<string>) => {
    return <p>{content}</p>
}

export default Paragraph
