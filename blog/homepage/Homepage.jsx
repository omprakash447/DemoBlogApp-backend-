import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Blog from '../blogs/Blog'
import Body from '../Body/Body'
import BlogPage from '../createblog/CreateBlog'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

function Homepage() {
    return (
        <div className='homepage'>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Body />} />
                <Route path='/Blog' element={<Blog />} />
                <Route path='/Create' element={<BlogPage />} />
            </Routes>
        </Router>
        <Footer />
        </div>
    )
}

export default Homepage
