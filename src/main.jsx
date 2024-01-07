import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewsCards from './Components/NewsCards.jsx'
import Search from './Components/Search.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [

      {
        path: '/',
        element: <NewsCards category='general' />
      },
      {
        path: '/entertainment',
        element: <NewsCards category='entertainment' />
      },
      {
        path: '/politics',
        element: <NewsCards category='politics' />
      },
      {
        path: '/sports',
        element: <NewsCards category='sports' />
      },
      {
        path: '/health',
        element: <NewsCards category='health' />
      },
      {
        path: '/science',
        element: <NewsCards category='science' />
      },
      {
        path: '/technology',
        element: <NewsCards category='technology' />
      },
      {
        path: '/search/:slug',
        element: <Search />
      },



    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} shouldUpdateScroll={() => true} />
  </React.StrictMode>,
)
