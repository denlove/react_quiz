import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import MainQuiz from '../modules/MainQuiz'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [{ index: true, element: <MainQuiz /> }],
    },
])
