import ReduxProvider from './Providers/ReduxProvider'
import RouterDomProvider from './Providers/RouterDomProvider'

const RootProvider = () => {
    return (
        <ReduxProvider>
            <RouterDomProvider />
        </ReduxProvider>
    )
}

export default RootProvider
