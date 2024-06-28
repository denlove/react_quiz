import { Provider } from 'react-redux'
import { persistor, store } from '../../redux/store'
import { IChildParams } from '../../types/interfaces'
import { PersistGate } from 'redux-persist/integration/react'

const ReduxProvider = ({ children }: IChildParams) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default ReduxProvider
