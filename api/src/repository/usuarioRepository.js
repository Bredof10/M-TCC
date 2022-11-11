import {con} from './connection';

export async function ogin(email, senha) {
    const comando =
     ` select id_administrador	  id,
              ds_email		        email
         from	tb_administrador
        where	ds_email             = ?
         and	ds_senha             = ?`

   const [linhas] = await con.query(comando, [email, senha])
  return linhas[0];

}