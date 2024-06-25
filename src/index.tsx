import ReactDOM from 'react-dom/client'
import RootProvider from './lib/RootProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<RootProvider />)
