import styled from 'styled-components'
import { IChildParams } from '../types/interfaces'

const StyledMainWrapper = styled.div`
    max-width: 1280px;
`

const MainWrapper = ({ children }: IChildParams) => {
    return <StyledMainWrapper>{children}</StyledMainWrapper>
}

export default MainWrapper
