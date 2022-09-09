export interface Membro {
  id_membro?: number
  nome_membro: string
  funcao: string
  id_equipe?: number
  nome_equipe?: string
}

export interface MembrocomInfo {
  id_membro?: number
  nome_membro: string
  funcao: string
  id_equipe?: number
  nome_equipe?: string
  tarefas: []
}