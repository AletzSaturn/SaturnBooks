import { useState } from 'react';
import './App.css'
import BookSearch from './book-search/components/book-search'
import TopNavBar from './top-navbar/components/top-navbar';
// import ToDoList from './to-do-list/to-do.component'
import { BrowserRouter as Router, Routes, Route, Link, createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import Register from './sign-in/components/sign-in.component';
import HomePage from './home/components/home.component';

function App() {
  const [showNavBar, setShowNavBar] = useState<boolean>(false);

  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  }

  const routes = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/sign-in', element: <Register /> },
  ]);



  return (
    <>
      <TopNavBar showNavBar={showNavBar} handleShowNavBar={handleShowNavBar}>
      </TopNavBar>
      <div className={showNavBar ? 'blurred-content' : ''}>
        {/* <ToDoList /> */}
      </div>
    </>
  )
}

export default App
