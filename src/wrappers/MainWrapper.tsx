import styled from 'styled-components'
import { IChildParams } from '../types/interfaces'

const StyledMainWrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`

const MainWrapper = ({ children }: IChildParams) => {
    return <StyledMainWrapper>{children}</StyledMainWrapper>
}

export default MainWrapper
