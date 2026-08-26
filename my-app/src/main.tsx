import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

//Objetos do react-router
import { createBrowserRouter, RouterProvider } from 'react-router';

//importando os componentes de rotas
import Home from './components/Home/index.tsx';
import Produtos from './components/Produtos/index.tsx';
import EditarProdutos from './components/EditarProdutos/index.tsx';
import Error from './components/Error/index.tsx';

//Criando o vetor de objetos com rotas
const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <Error />, children: [{ path: "/produtos", element: <Produtos /> },
    { path: "editar-produtos/:id", element: <EditarProdutos /> },
    { path: "/produtos", element: <Produtos /> }
    ]}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
