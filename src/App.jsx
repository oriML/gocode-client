import ProductsCards from './components/ProductsCards';

import './App.css'
import { userContext } from './context/UserContext';

const user = {
  name: 'Shay',
  role: 'Admin',
  mobile: 1234567890
}

function App() {

  return (
    <userContext.Provider value={{
      user
  }}>
      <ProductsCards />
    </userContext.Provider>
  )
}

export default App
