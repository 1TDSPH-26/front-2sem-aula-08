import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

//Importando os objetos do react-router
import { createBrowserRouter,RouterProvider } from 'react-router';

//Importando os componentes de rotas
import Home from './routes/Home/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from'./routes/EditarProdutos/inde.tsx';
import Error from './routes/Error/index.tsx';

//Criando o vetor de objetos com rotas
const router = createBrowserRouter([
  {path: "/", element:<App/>, errorElement:<Error/>, children:[
    {path: "/", element:<Home/>},
    {path: "/produtos", element:<Produtos/>},
    {path: "/editar-produtos/:id", element:<EditarProdutos/>},
  ]}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
