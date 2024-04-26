import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from './components/About'
import Navbar from './components/Navbar'
import TopStories from './components/TopStories'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import Search from './components/Search'
import {categories} from './constants/index'
import Detail from "./components/Detail";
import PaymentSuccess from "./components/PaymentSuccess";
import InternalPayment from './components/InternalPayment'
import RSSFeed from './components/Rss'

function App() {
  const apiKey = "bKOqdG3vfuhfn8MgkX7TrJWFyFCKjNBc";
  const currentPath = window.location.pathname

  return (
    <>
      <Router>
        {currentPath !== '/rss' && <Navbar />}
        <Routes>
          <Route exact path='/' element={<TopStories apiKey={apiKey} section="home" />}></Route>
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/internal-payment' element={<InternalPayment />}></Route>
          <Route exact path='/payment-successful' element={<PaymentSuccess />}></Route>
          <Route exact path='/rss' element={<RSSFeed />}></Route>
          <Route exact path='*' element={<NotFound />}></Route>
          <Route exact path='/search' element={<Search apiKey={apiKey}/>}></Route>
          {
            categories.map((e) => {
              return <Route key={e} exact path={`/categories/${e.toLowerCase()}`} element={<TopStories apiKey={apiKey} section={e.toLowerCase()} />}></Route>
            })
          }
        </Routes>
        {currentPath !== '/rss' && <Footer />}
      </Router>
    </>
  )
}

export default App
