import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './container/Layout/Layout';
import Home from './container/Home/Home';
import CreateBlog from './container/CreateBlog/CreateBlog';
import Login from './components/Login/Login';

import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '',
    element: <Layout/>,
    children: [
     {
      path:'/home',
      element: <Home/>
     },
     {
      path: '/createblog',
      element: <CreateBlog/>
     },
    ]
  }
])
function App() {
  
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App
