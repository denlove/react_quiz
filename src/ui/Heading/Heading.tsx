import { IContent } from '../../types/interfaces'
import { HeadingsType } from '../../types/types'
import { StyledHeading } from './Heading.styles'

interface IHeading extends IContent<string> {
    role: HeadingsType
}

const Heading = ({ content, role }: IHeading) => {
    return <StyledHeading as={role}>{content}</StyledHeading>
}

export default Heading
