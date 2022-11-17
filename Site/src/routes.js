import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Adidas from './pages/adidas';
import Nike from './pages/nike';
import Puma from './pages/puma';
import NewBalance from './pages/newBalance/index';
import Reebok from './pages/reebok';
import Perfil from './pages/perfil';


import Login from './pages/admin/login'
import Produto from './pages/admin/produto'
import ConsultarProduto from './pages/admin/consultarProduto'

import LoginCli from './pages/login'
import ProdutoDetalhe from './pages/produtoDetalhe';
import Carrinho from './pages/carrinho';
import Pedido from './pages/pedido';
import Cadastro from './pages/cadastro';



export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/login' element={<LoginCli />} />
                <Route path='/produto/:id/detalhe' element={<ProdutoDetalhe />} />
                <Route path='/carrinho' element={<Carrinho />} />
                <Route path='/pedido' element={<Pedido />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/adidas' element={<Adidas />} />
                <Route path='/nike' element={<Nike />} />
                <Route path='/puma' element={<Puma />} />
                <Route path='/newbalance' element={<NewBalance />} />
                <Route path='/reebok' element={<Reebok />} />
                <Route path='/perfil' element={<Perfil />} />
                
                
                
               
                <Route path='/admin/login' element={<Login />} />
                <Route path='/admin/produto' element={<Produto />} />
                <Route path='/admin/produto/:id' element={<Produto />} />
                <Route path='/admin/produto/buscar' element={<ConsultarProduto />} />
            </Routes>
        </BrowserRouter>
    )
}