import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import { DarkProvider } from "./contexts/dark"

export default function App() {
  return (
    <DarkProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DarkProvider>
  )
}