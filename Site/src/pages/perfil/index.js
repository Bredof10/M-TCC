import './index.scss';
import { useNavigate } from 'react-router-dom';



export default function Index(){
const navigate = useNavigate();

 
     return(
        <main className='pagina-perfil'>
        <nav className='menu'>
        <div className='perfil'>Perfil</div>
        </nav>

            <div className='pg'>


            <div className='div1'>

            <h1 className='div'>Informações Pessoais</h1>
            <img className='editar' src='/images/editar.png' alt=''/>


            </div>

            <div className='div2'>

             <h1 className='div'>Loguin & Senha</h1>
            <img className='editar' src='/images/editar.png' alt=''/>


              <div className='final'>

                    <h1> SEM ENDEREÇO INFORMADO</h1>
                    <button className='botao'> INFOME SEU ENDEREÇO AQUI</button>
                    <h1> NENHUM CARTAO DE CREDITO INFORMADO</h1>
                    <button className='botao'>SALVAR UM CARTÃO</button>


              </div>


</div>


            </div>

















         </main>




     )
    


 }
    