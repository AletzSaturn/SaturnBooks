import { useState } from 'react';
import './App.css'
import BookSearch from './book-search/components/book-search'
import TopNavBar from './book-search/top-navbar/components/top-navbar';
// import ToDoList from './to-do-list/to-do.component'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './sign-in/components/sign-in.component';
import HomePage from './home/components/home.component';

function App() {
  const [showNavBar, setShowNavBar] = useState<boolean>(false);

  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  }
  return (
    <>
      <Router>
        <TopNavBar showNavBar={showNavBar} handleShowNavBar={handleShowNavBar}>
          <ul>
            <li className='h-10 content-center hover:cursor-pointer hover:bg-blue-400/50 active:bg-blue-600/50'>
              <Link to="/">Home</Link>
            </li>
            <li className='h-10 content-center hover:cursor-pointer hover:bg-blue-400/50 active:bg-blue-600/50'>
              <Link to="/">My Books</Link>
            </li>
            <li className='h-10 content-center hover:cursor-pointer hover:bg-blue-400/50 active:bg-blue-600/50'>
              <Link to="/">Sign-In</Link>
            </li>
            <li className='h-10 content-center hover:cursor-pointer hover:bg-blue-400/50 active:bg-blue-600/50'>
              <Link to="/about">Register</Link>
            </li>
          </ul>
        </TopNavBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<BookSearch />} />
          <Route path='/sign-in' element={<Register />} />
        </Routes>
      </Router >
      <div className={showNavBar ? 'blurred-content' : ''}>
        {/* <ToDoList /> */}
      </div>
    </>
  )
}

export default App
