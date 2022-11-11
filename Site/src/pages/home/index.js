import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listarProdutosInicio } from '../../api/produtoAPI'
import CardProduto from '../../components/cardProduto'
import './index.scss'

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    const navigate = useNavigate();

    function irCarrinho() {
        navigate('/carrinho')
    }

    async function listar() {
        const r = await listarProdutosInicio();
        setProdutos(r);
    }


    useEffect(() => {
        listar();
    }, [])


    return (
        <div className='pagina-home'>
           <nav className='menu'>
            <img className='sne' src='/images/snek.png' alt=''/>
            <div id="linha-horizontal"></div>
            <div className='text'>
                <h1>Nike</h1>
                <h1>Adidas</h1>
                <h1>Puma</h1>
                <h1>Rebook</h1>
                <h1>New Balance</h1>
                <input class="pesquisa" type="text" name="nome" placeholder="O que você procura?" autofocus />
                <img className='carrinho' src='/images/car.png' alt='' onClick={irCarrinho}/>
                <img className='perfil' src='/images/cont.png' alt='' />
            </div>
            </nav>

            <div className="produtos-container">
                {produtos.map(item => 
                    <CardProduto item={item} />
                )}
                
            </div>
        </div>
    )
}