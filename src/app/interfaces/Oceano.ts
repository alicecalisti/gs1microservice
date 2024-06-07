export interface Oceano {
  regiao: string;
  temperaturaAgua: number;
  pH: number;
  nivelPoluicao: string;
  especies: { nome: string; status: string; }[];
  projetosConservacao: { nomeProjeto: string; tipoProjeto: string; tipoParticipacao: string; }[];
}
