export interface FilmeModel {
    id: number,
    titulo: String,
    diretor: String,
    anoLancamento: number,
    genero: String,
    duracao: number,
    classificacaoEtaria: String,
    sinopse: String,
    elenco: String[],
    orçamento: number,
    bilheteira: number,
    estudio: String;
}
