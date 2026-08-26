import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'


//importando os objetos do react router
import { createBrowserRouter, RouterProvider } from 'react-router';


//importando os componentes de rotas
import Produtos from './routes/Produtos/index.tsx';
import Home from './routes/Home/index.tsx';
import EditarProduto from './routes/EditarProdutos/index.tsx';
import Error from './routes/Error/index.tsx';
import Conteudo from './routes/Conteudo/index.tsx';


//
const router = createBrowserRouter(
  [
    {
 path: '/',
 element: <App />,
 errorElement: <Error />,
 children: [
 {
 path: '/',
 element: <Home />,
 },
 {
 path: '/produtos',
 element: <Produtos />,
 },
 {
 path: '/editar-produto/:id',
 element: <EditarProduto />,
 },{
 path: '/conteudo',
 element: <Conteudo/>
 },
 ],
 },

  ]
) 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
