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
    path: '/assignment-one-gh-deployment/',
    element:
      <AnimatePresence initial={false}>
        <Root key={'/assignment-one-gh-deployment/'} />
      </AnimatePresence>,
    errorElement: <Error />,
    children: [
      {
        path: '/assignment-one-gh-deployment/',
        element:
          <AnimatePresence initial={false} >
            <Home key={'/assignment-one-gh-deployment/'} />
          </AnimatePresence>
      },
      {
        path: "/assignment-one-gh-deployment/workhistory",
        element:
          <AnimatePresence initial={false} >
            <WorkHistory key={'/assignment-one-gh-deployment/workhistory'} />
          </AnimatePresence>
      },
      {
        path: "/assignment-one-gh-deployment/projects",
        element:
          <AnimatePresence inital={false}>
            <Projects key={'/assignment-one-gh-deployment/projects'} />
          </AnimatePresence>
      },
      {
        path: "/assignment-one-gh-deployment/about",
        element:
          <AnimatePresence initial={false}>
            <About key={'/assignment-one-gh-deployment/about'} />
          </AnimatePresence>
      },
      {
        path: "/assignment-one-gh-deployment/links",
        element:
          <AnimatePresence initial={false}>
            <Links key={'/assignment-one-gh-deployment/links'} />
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
      <div className="h-screen w-screen flex">
        <h1>Sorry, it looks like we're having troule displaying this page.</h1>
      </div>
    </>
  )
}