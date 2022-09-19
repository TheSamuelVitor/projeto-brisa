export interface Tarefa {
  id_tarefa?: number,
  nome_tarefa: string,
  descricao?: string,
  id_projeto: number,
  nome_projeto?: string,
  id_membro: number,
  nome_membro?: string
}

export interface Situacao {
  id: number,
  nome: string
}