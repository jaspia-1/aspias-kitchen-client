import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Login from './Components/Login/Login';
import Myreviews from './Components/Myreviews/Myreviews';
import AddService from './Components/AddService/AddService';
import BLog from './Components/Blog/BLog';
import Private from './Private/Private';
import SIgnUp from './Components/SignUp/SIgnUp';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => fetch('https://aspis-kitchen-server.vercel.app/services?size=3')

        },
        {
          path: '/services',
          element: <Services></Services>

        },
        {
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: async ({ params }) => fetch(`https://aspis-kitchen-server.vercel.app/services/${params.id}`)

        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SIgnUp></SIgnUp>
        },

        {
          path: '/myreview',
          element: <Private> <Myreviews></Myreviews></Private>
        },
        {
          path: '/addservice',
          element: <AddService></AddService>
        },
        {
          path: '/blog',
          element: <BLog></BLog>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
