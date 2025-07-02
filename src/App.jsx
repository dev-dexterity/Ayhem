import React from 'react'
import HomePage from './pages/home'
import Header from './components/header'
import Footer from './components/footer'
import Categories from './pages/Categories'
import WhyChooseMe from './pages/WhyChoseMe'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <Header/>
      <Categories/>
      <HomePage />
      <WhyChooseMe />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App