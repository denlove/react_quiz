import { Link } from 'react-router-dom'
import { HOME_ROUTE } from '../../utils/routes'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={HOME_ROUTE}>Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
