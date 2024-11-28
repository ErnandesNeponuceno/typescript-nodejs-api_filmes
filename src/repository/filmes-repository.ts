// import { database } from "../data/filmes-data"
import { FilmeModel } from "../model/filmes-model"
import { FilmeUpdateModel } from "../model/filmes-update-model"
import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '..', 'data', 'filmes-data.json');

const saveDatabase = (films: FilmeModel[]) => {
  fs.writeFileSync(filePath, JSON.stringify(films, null, 2));
};

const database = (): FilmeModel[] => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

const getNextId = (): number => {
  const films = database(); 
  const lastId = films.reduce((max, filme) => (filme.id > max ? filme.id : max), 0);
  return lastId + 1;
};

export const findAllFilmes = async ():Promise<FilmeModel[]> =>{
    return database();
}
      
export const findFilmeById = async (id: number):Promise<FilmeModel | undefined> =>{
    const filmes = database();
    return filmes.find(filme => filme.id === id);
}

export const findFilmeByTitle = async (titulo: String): Promise<FilmeModel | undefined> => {
  const filmes = database();
  return filmes.find(filme => filme.titulo.toLowerCase() === titulo.toLowerCase());
}

export const postFilme = async (filme: FilmeModel) =>{
  const newId = getNextId(); 
  const newFilme = { ...filme, id: newId }; 
  const films = database(); 
  films.push(newFilme); 
  saveDatabase(films); 
  return newFilme;
}

export const putFilme = async (id: number, dadosUpdate: FilmeUpdateModel) => {
  const filmes = database();
  const index = filmes.findIndex(filme => filme.id === id);
  if (index !== -1) {
      filmes[index] = { ...filmes[index], ...dadosUpdate };
      saveDatabase(filmes);
  }
  return filmes[index];
};

export const deleteFilme = async (id: number) => {
  const filmes = database();
  const index = filmes.findIndex(filme => filme.id === id);
  if (index !== -1) {
      filmes.splice(index, 1);
      saveDatabase(filmes);
  }
};
