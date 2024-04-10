import { Provider } from 'react-redux';
import { store } from './store/store'
import Layout from './layout/Layout';

function App() {
  return (
    <Provider store={store}>
      <Layout></Layout>
    </Provider>
  )
}

export default App
