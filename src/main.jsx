import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import App from './App.jsx'
import Portfolio from './pages/Portfolio';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/aboutme',
                element: <Aboutme />
            }, {
                path: '/portfolio',
                element: <Portfolio />
            }, {
                path: 'contact',
                element: <Contact />
            }, {
                path: 'resume',
                element: <Resume />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

