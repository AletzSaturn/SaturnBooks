import { useState } from 'react';
import './App.css'
import BookSearch from './book-search/components/book-search'
import TopNavBar from './book-search/top-navbar/top-navbar'
// import ToDoList from './to-do-list/to-do.component'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './sign-in/components/sign-in.component';

function App() {
  const [showNavBar, setShowNavBar] = useState<boolean>(false);

  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  }
  return (
    <>
      <TopNavBar showNavBar={showNavBar} handleShowNavBar={handleShowNavBar} />
      <div className={showNavBar ? 'blurred-content' : ''}>
        <Router>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav> */}
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/about" element={<BookSearch />} />
            <Route path='/sign-in' element={<Register />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </Router>
        {/* <ToDoList /> */}
      </div>
    </>
  )
}

export default App
