export interface Projeto {
  id_projeto?: number,
  nome_projeto: string,
  descricao?: string,
  id_equipe: Number,
  nome_equipe?: string
}

export interface ProjetoComInfo {
  id_projeto?: number,
  nome_projeto: string,
  descricao?: string,
  id_equipe: Number,
  nome_equipe?: string,
  tarefas: []
}