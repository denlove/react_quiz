import { Link } from 'react-router-dom'
import { HOME_ROUTE } from '../../utils/routes'
import { LinkItem, LinkList, NavBar, StyledHeader } from './Header.styles'
import MainWrapper from '../../wrappers/MainWrapper'

const Header = () => {
    return (
        <StyledHeader>
            <MainWrapper>
                <NavBar>
                    <LinkList>
                        <LinkItem>
                            <Link to={HOME_ROUTE}>Home</Link>
                        </LinkItem>
                    </LinkList>
                </NavBar>
            </MainWrapper>
        </StyledHeader>
    )
}

export default Header
