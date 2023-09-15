import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store.js'
import {Provider} from 'react-redux'

console.log(store.getState())
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider> 
    </BrowserRouter>
  </ChakraProvider>
)
