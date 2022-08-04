export interface Tarefa {
    id_tarefa?: number,
    nome_tarefa: string,
    descricao?: string,
    id_projeto: number,
    id_membro: number
}