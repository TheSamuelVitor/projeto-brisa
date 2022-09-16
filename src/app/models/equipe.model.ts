export interface Equipe {
  id_equipe?: number,
  nome_equipe: string
}

export interface Equipecomdata {
  id_equipe?: number,
  nome_equipe: string
  createdAt: string,
  updatedAt: string,
}

export interface EquipecomInfo {
  id_equipe?: any,
  nome_equipe: string,
  membros: [],
  projetos: []
}