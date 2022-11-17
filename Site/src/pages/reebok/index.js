import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Storage from 'local-storage';
import { toast } from 'react-toastify';

import { buscarProdutoPorId } from '../../api/produtoAPI';
import { API_URL } from '../../api/config';



export default function Index(){

    const [produto, setProduto] = useState({ categorias: [], imagens: [], info: {} })
    const [imagemPrincipal, setImagemPrincipal] = useState(0);

    const { id } = useParams();


    async function carregarPagina() {
        const r = await buscarProdutoPorId(id);
        setProduto(r);
    }

    function exibirImagemPrincipal() {
        if (produto.imagens.length > 0) {
            return API_URL + '/' + produto.imagens[imagemPrincipal];
        }
        else {
            return '/produto-padrao.png';
        }
    }

    function exibirImagemProduto(imagem) {
        return API_URL + '/' + imagem;
    }


    function adicionarAoCarrinho() {
        let carrinho = [];
        if (Storage('carrinho')) {
            carrinho = Storage('carrinho');
        }


        if (!carrinho.find(item => item.id === id)) {
            carrinho.push({
                id: id,
                qtd: 1
            })

            Storage('carrinho', carrinho);
        }

        toast.dark('Produto adicionado ao carrinho!');
    }

    
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


    function irNike() {
        navigate('/nike')
    }
    
    
    function irAdidas() {
        navigate('/adidas')
    }
    
    
    function irPuma() {
        navigate('/puma')
    }
    
    
    function irReebok() {
        navigate('/reebok')
    }
    
    
    function irNewbalance() {
        navigate('/newbalance')
    }


    function irPerfil() {
        navigate('/perfil')
    }

    return(
        <main className='pagina-rebook'>
            <nav className='menu'>
            <img className='sne' src='/images/snek.png' alt=''/>
            
            <div className='text'>
            <h1 onClick={irNike}>Nike</h1>
                <h1 onClick={irAdidas}>Adidas</h1>
                <h1 onClick={irPuma}>Puma</h1>
                <h1 onClick={irReebok}>Rebook</h1>
                <h1 onClick={irNewbalance}>New Balance</h1>
                <input class="pesquisa" type="text" name="nome" placeholder="O que você procura?" autofocus />
                <img className='carrinho' src='/images/car.png' alt='' onClick={irCarrinho}  />
                <img className='perfil' src='/images/cont.png' alt='' onClick={irPerfil} />
            </div>   
            </nav>
            <img className='reebok' src='/images/reebok.png' alt=''/>
<div>
<div className='venda'> 

<div id="tn">
        <img className='heart' src='/images/Heart.png' alt='' onClick={adicionarAoCarrinho} />
        <img className='png' src='/images/Nike-T2.png'  height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt='' onClick={adicionarAoCarrinho} />
        <img className='png' src='/images/Nike-T2.png' height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt='' onClick={adicionarAoCarrinho} />
        <img className='png' src='/images/Nike-T2.png'  height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt='' onClick={adicionarAoCarrinho} />
        <img className='png' src='/images/Nike-T2.png'  height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>
        
</div>    


<div className='venda'> 

<div id="tn">
<img className='heart' src='/images/Heart.png' alt='' onClick={adicionarAoCarrinho} />
<img className='png' src='/images/Nike-T2.png'  height='90px'/>
<p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
<div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>
<div id="tn">
<img className='heart' src='/images/Heart.png' alt='' onClick={adicionarAoCarrinho} />
<img className='png' src='/images/Nike-T2.png' height='90px'/>
<p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
<div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

<div id="tn">
<img className='heart' src='/images/Heart.png' alt='' onClick={adicionarAoCarrinho} />
<img className='png' src='/images/Nike-T2.png'  height='90px'/>
<p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
<div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

<div id="tn">
<img className='heart' src='/images/Heart.png' alt='' onClick={adicionarAoCarrinho} />
<img className='png' src='/images/Nike-T2.png'  height='90px'/>
<p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
<div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

</div>    

<div className='venda'> 

<div id="tn">
        <img className='heart' src='/images/Heart.png' alt='' onClick={adicionarAoCarrinho} />
        <img className='png' src='/images/Nike-T2.png'  height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

    <div id="tn">
    <img className='heart' src='/images/Heart.png' alt='' onClick={adicionarAoCarrinho} />
        <img className='png' src='/images/Nike-T2.png' height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>
    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt='' onClick={adicionarAoCarrinho} />
        <img className='png' src='/images/Nike-T2.png'  height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt='' onClick={adicionarAoCarrinho} />
        <img className='png' src='/images/Nike-T2.png'  height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>
        
</div>    
<p>a</p>
</div>
</main>
)
}
