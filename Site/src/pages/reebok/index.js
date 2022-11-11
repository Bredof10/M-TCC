import './index.scss';
import { useNavigate } from 'react-router-dom';

export default function Index(){

    const navigate = useNavigate();


    function irCarrinho() {
        navigate('/carrinho')
    }

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
                <img className='perfil' src='/images/cont.png' alt='' />
            </div>   
            </nav>
            <img className='reebok' src='/images/reebok.png' alt=''/>
<div>
<div className='venda'> 

<div id="tn">
        <img className='heart' src='/images/Heart.png' alt=''/>
        <img className='png' src='/images/Nike-T2.png'  height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt=''/>
        <img className='png' src='/images/Nike-T2.png' height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt=''/>
        <img className='png' src='/images/Nike-T2.png'  height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt=''/>
        <img className='png' src='/images/Nike-T2.png'  height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>
        
</div>    


<div className='venda'> 

<div id="tn">
<img className='heart' src='/images/Heart.png' alt=''/>
<img className='png' src='/images/Nike-T2.png'  height='90px'/>
<p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
<div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>
<div id="tn">
<img className='heart' src='/images/Heart.png' alt=''/>
<img className='png' src='/images/Nike-T2.png' height='90px'/>
<p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
<div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

<div id="tn">
<img className='heart' src='/images/Heart.png' alt=''/>
<img className='png' src='/images/Nike-T2.png'  height='90px'/>
<p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
<div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

<div id="tn">
<img className='heart' src='/images/Heart.png' alt=''/>
<img className='png' src='/images/Nike-T2.png'  height='90px'/>
<p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
<div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

</div>    

<div className='venda'> 

<div id="tn">
        <img className='heart' src='/images/Heart.png' alt=''/>
        <img className='png' src='/images/Nike-T2.png'  height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

    <div id="tn">
    <img className='heart' src='/images/Heart.png' alt=''/>
        <img className='png' src='/images/Nike-T2.png' height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>
    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt=''/>
        <img className='png' src='/images/Nike-T2.png'  height='90px'/>
        <p>TÊNIS NIKE AIR VAPORMAX PLUS RUN UTILITY</p>
        <div className='preco2'><div className='preco'>R$699,99</div> </div>
    </div>

    <div id="tn">
        <img className='heart' src='/images/Heart.png' alt=''/>
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
