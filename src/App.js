import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Login from './Components/Login/Login';
import SIgnUP from './Components/SignUp/SIgnUP';
import Myreviews from './Components/Myreviews/Myreviews';
import AddService from './Components/AddService/AddService';
import BLog from './Components/Blog/BLog';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => fetch('http://localhost:5000/services?size=3')

        },
        {
          path: '/services',
          element: <Services></Services>

        },
        {
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SIgnUP></SIgnUP>
        },

        {
          path: '/myreview',
          element: <Myreviews></Myreviews>
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
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
