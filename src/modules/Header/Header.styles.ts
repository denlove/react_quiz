import styled from 'styled-components'

const StyledHeader = styled.header`
    width: 100%;
    height: 3rem;
`

const NavBar = styled.nav`
    width: 100%;
`

const LinkList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
`

const LinkItem = styled.li`
    font-size: var(--fs-25);
    margin: 0.5rem 0;

    a,
    a:link,
    a:visited {
        transition: all 0.3s linear;
        padding: 0.5rem 1rem;
        text-decoration: none;
        color: var(--text-color-2);

        &:hover {
            color: hsl(--hover-link-1);
        }
    }
`

export { StyledHeader, NavBar, LinkList, LinkItem }
