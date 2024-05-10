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

function App() {
  const apiKey = "bKOqdG3vfuhfn8MgkX7TrJWFyFCKjNBc";

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<TopStories apiKey={apiKey} section="home" />}></Route>
          <Route path="/detail/*" element={<Detail />} />
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/internal-payment' element={<InternalPayment />}></Route>
          <Route exact path='/payment-successful' element={<PaymentSuccess />}></Route>
          <Route exact path='*' element={<NotFound />}></Route>
          <Route exact path='/search' element={<Search apiKey={apiKey}/>}></Route>
          {
            categories.map((e) => {
              return <Route key={e} exact path={`/categories/${e.toLowerCase()}`} element={<TopStories apiKey={apiKey} section={e.toLowerCase()} />}></Route>
            })
          }
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
