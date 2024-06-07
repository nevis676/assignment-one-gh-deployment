import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/home';
import Root from './routes/root';
import WorkHistory from './routes/workhistory';
import About from './routes/about';
import { AnimatePresence } from 'framer-motion';
import Projects from './routes/projects';
import Links from './routes/links';

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <AnimatePresence initial={false}>
        <Root key={'/'} />
      </AnimatePresence>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element:
          <AnimatePresence initial={false} >
            <Home key={'/'} />
          </AnimatePresence>
      },
      {
        path: "/workhistory",
        element:
          <AnimatePresence initial={false} >
            <WorkHistory key={'/workhistory'} />
          </AnimatePresence>
      },
      {
        path: "/projects",
        element:
         <AnimatePresence inital={false}>
            <Projects key ={'/projects'} />
         </AnimatePresence>
      },
      {
        path: "/about",
        element:
        <AnimatePresence initial={false}>
          <About key={'/about'}/>
        </AnimatePresence>
      },
      {
        path: "/links",
        element:
        <AnimatePresence initial={false}>
          <Links key={'/links'}/>
        </AnimatePresence>
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

function Error() {
  return (
    <>
      <p>Error</p>
    </>
  )
}