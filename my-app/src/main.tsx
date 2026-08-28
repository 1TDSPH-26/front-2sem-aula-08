import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './routes/Home/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import Error from './routes/Error/index.tsx'
import App from './App.tsx'


const router = createBrowserRouter([{
  path: "/", element: <App />, errorElement: <Error />, children: [
    {path: "/", element: <Home />},
    {path: "/produtos", element: <Produtos />}
  ]
}])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
