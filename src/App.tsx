import { Outlet } from 'react-router-dom'
import Footer from './modules/Footer'
import Header from './modules/Header'
import GlobalStyles from './styles/index.styles'
import MainWrapper from './wrappers/MainWrapper'

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <MainWrapper>
                <Outlet />
            </MainWrapper>
            <Footer />
        </>
    )
}

export default App
