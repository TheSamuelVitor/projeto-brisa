// type Tarefa struct {
// 	Id_tarefa   int    `gorm:"primary_key" json:"id_tarefa"`
// 	Name_task   string `json:"name_task"`
// 	Description string `json:"description"`
// 	Id_projeto  int    `json:"id_project"`
// 	Id_membro   int    `json:"id_membro"`
// }

export interface Tarefa {
    id_tarefa?: number,
    name_task: string,
    description?: string,
    id_project: number,
    id_membro: number
}