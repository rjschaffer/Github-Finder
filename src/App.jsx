import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import {GithubProvider} from './context/github/GithubContext'
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()

// console.log(process.env)



function App() {
  return (
    <GithubProvider>
    <Router>
      <div className="w-screen flex flex-col min-h-screen justify-between dark:bg-base-100">
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/notfound' element={<NotFound />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/*' element={<NotFound />}/>
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </GithubProvider>
  )
}

export default App
