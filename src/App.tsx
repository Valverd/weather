import 'react-toastify/ReactToastify.css'

import Home from "./pages/Home/Home"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ContextProvider } from "./contexts/Context"
import { ToastContainer } from "react-toastify"

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}