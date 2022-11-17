import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listarProdutosInicio } from '../../api/produtoAPI'
import CardProduto from '../../components/cardProduto'
import './index.scss'

import { useParams } from 'react-router-dom'
import Storage from 'local-storage'
import { toast } from 'react-toastify'
import { buscarProdutoPorId } from '../../api/produtoAPI';
import { API_URL } from '../../api/config';




export default function Home() {

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

    return (
        <div className='pagina-home'>
           <nav className='menu'>
            <img className='sne' src='/images/snek.png' alt=''/>
          
          
            
            <div className='text'>
            <h1  onClick={irNike}>Nike</h1>
                <h1 onClick={irAdidas}>Adidas</h1>
                <h1 onClick={irPuma}>Puma</h1>
                <h1 onClick={irReebok}>Rebook</h1>
                <h1 onClick={irNewbalance}>New Balance</h1>
                <input class="pesquisa" type="text" name="nome" placeholder="O que você procura?" autofocus  />
                <img className='carrinho' src='/images/car.png' alt='' onClick={irCarrinho}/>
                <img className='perfil' src='/images/cont.png' alt='' onClick={irPerfil} />
            </div>
            </nav>
            <img className='sneakers' src='/images/sneak.jpg' alt=''/> 
            <img className='lading' src='/images/ladingpage.jpg' alt=''/> 
            <h1 className='procurado'>Mais Procurados:</h1>
  <div>
<div className='venda'> 


<div id="tn"> 
        
        <img className='heart' src='/images/Heart.png' alt='' onClick={adicionarAoCarrinho}/>
        <img className='png' src='/images/airmax.webp'  height='90px'/>
        <p>TÊNIS NIKE AIR MAX PLUS PRETO/PRATEADO</p>
        <div className='preco2'><div className='preco'>R$699,99</div> 
  </div>
    </div>

    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt=''  onClick={adicionarAoCarrinho}/>
        <img className='png' src='/images/puma2.webp' height='90px'/>
        <p>TÊNIS PUMA X RAY 2 SQUARE BDP Black </p>
        <div className='preco2'><div className='preco'>R$343,92</div> </div>
    </div>

    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt=''  onClick={adicionarAoCarrinho}/>
        <img className='png' src='/images/Nike-T2.png'  height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY </p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt=''  onClick={adicionarAoCarrinho}/>
        <img className='png' src='/images/jordan.jpg'  height='90px'/>
        <p>AIR JORDAN 4 RETRO - METALLIC PURPLE</p>
        <div className='preco2'><div className='preco'>R$585,90</div> </div>
    </div>
        
</div> 



<div className='venda'> 

<div id="tn"> 
        
        <img className='heart' src='/images/Heart.png' alt=''  onClick={adicionarAoCarrinho}/>
        <img className='png' src='/images/balance.webp'  height='90px'/>
        <p>TÊNIS NEW BALANCE 550 WHITE TEAM RED</p>
        <div className='preco2'><div className='preco'>R$899,99</div> 
  </div>
    </div>

    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt=''  onClick={adicionarAoCarrinho}/>
        <img className='png' src='/images/adidas5.webp' height='90px'/>
        <p> Tênis Adidas Kaptir Super Feminino - Branco</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt=''  onClick={adicionarAoCarrinho}/>
        <img className='png' src='/images/pumaf.jpg'  height='90px'/>
        <p>TÊNIS X-RAY PUMA LANÇAMENTO ORIGINAL </p>
        <div className='preco2'><div className='preco'>R$427,70</div> </div>
    </div>

    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt=''  onClick={adicionarAoCarrinho}/>
        <img className='png' src='/images/jordan2.jpeg'  height='90px'/>
        <p>TÊNIS NIKE AIR JORDAN 1 LOW ' WHITE WOLF GREY '</p>
        <div className='preco2'><div className='preco'>R$749,00</div> </div>
    </div>
        
</div> 


<div className='rodape'> 
   
   <div className='div1'> 
        <h1> SNEAKERS -WORLD-</h1>
         <p className='div'>Cadastre-se para receber novidades Cartão Presente</p>
          <p className='div'>Área Restrita</p>
</div>


     <div className='div2'>  

        <h1>LOJA</h1>
         <p className='div' >Coleção Masculina</p>
         <p className='div'>Coleção Feminina</p>
         <p className='div'>Coleção Infantil</p>
         <p className='div'>Coleção Esporte</p>

      </div>

      <div className='div3'>

    <h1 className='div'>AJUDA & CONTATO</h1>
    <h1 className='div'>FAQ</h1>
    <h1 className='div'>POR TELEFONE</h1>
    <h1 className='div'>(11) 9703-1607 </h1> 
    

</div>

       


</div>

  
        </div> 
            <div className="produtos-container">
                {produtos.map(item => 
                    <CardProduto item={item} />
                )}
            </div>
        </div>
    )
}  