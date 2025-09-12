import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './sign-in/components/sign-in.component';
import HomePage from './home/components/home.component';
import RootLayout from './rootLayout/Root.component';
import LogIn from './log-in/components/log-in.component';
import MyBooks from './my-books/my-books.component';

function App() {


  const routes = createBrowserRouter([
    {
      path: '/', element: <RootLayout />, children: [
        // { path: 'admin', element<HomePage/>, children: [
        //   { path: '/admin/:userId', element: <MyBooks /> },
        // ]},
        { path: '/', element: <HomePage /> },
        { path: '/my-books/:userId', element: <MyBooks /> },
        { path: '/log-in', element: <LogIn /> },
        { path: '/sign-in', element: <Register /> },
        { path: '/book-search', element: <Register /> },
      ]
    }
  ]);



  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
