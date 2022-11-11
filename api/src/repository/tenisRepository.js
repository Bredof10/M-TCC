import { con } from './connection';

export async function tenis() {
    const comando =
    `
    
    `

    const [linhas] = await con.query(comando, [])
    return linhas[0];
}