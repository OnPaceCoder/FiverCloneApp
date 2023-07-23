import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Orders from './pages/orders/Orders'
import MyGigs from './pages/myGigs/MyGigs'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import Add from './pages/add/Add'
import './App.scss'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

function App() {
  const queryClient = new QueryClient();


  const Layout = () => {
    return (

      <>
        <QueryClientProvider client={queryClient}>

          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </>
    )
  }

  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/gigs",
      element: <Gigs />
    },
    {
      path: "/gig/:id",
      element: <Gig />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/orders",
      element: <Orders />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/mygigs",
      element: <MyGigs />
    },
    {
      path: "/message",
      element: <Message />
    },
    {
      path: "/messages",
      element: <Messages />
    },
    {
      path: "/add",
      element: <Add />
    },
    ]
  }])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
