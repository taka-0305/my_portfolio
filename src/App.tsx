import './App.css'

import { Router } from './routes/router';
import { Header } from './components/layout/header'
import { Footer } from './components/layout/footer'

function App() {

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default App
