import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import { IChildParams } from '../../types/interfaces'

const ReduxProvider = ({ children }: IChildParams) => {
    return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
