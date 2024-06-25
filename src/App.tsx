import { Outlet } from 'react-router-dom'
import Footer from './modules/Footer'
import Header from './modules/Header'

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App
