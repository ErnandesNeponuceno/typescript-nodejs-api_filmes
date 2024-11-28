import { FilmeModel } from './../model/filmes-model';
import * as repository from "../repository/filmes-repository";
import * as HttpResponse from "../utils/http-helper";
import { FilmeUpdateModel } from '../model/filmes-update-model';

export const getFilmesService = async () => {
    try {
        const data = await repository.findAllFilmes();
        if (data && data.length > 0) {
            return HttpResponse.ok(data);
        } else {
            return HttpResponse.noContent();
        }
    } catch (error) {
        throw new Error('Erro ao buscar filmes no serviço');
    }
}

export const getFilmeById = async (id: number) => {
    try {
        const data = await repository.findFilmeById(id);
        if (data) {
            return HttpResponse.ok(data);
        } else {
            return HttpResponse.noContent();
        }
    } catch (error) {
        throw new Error('Erro ao buscar filme no serviço');
    }
}

export const postFilme = async (filme: FilmeModel) => {
    try {
        const existingFilm = await repository.findFilmeByTitle(filme.titulo);
        if (existingFilm) {
            return HttpResponse.conflict('Filme já existe');
        }
        if (Object.keys(filme).length !== 0) {
            await repository.postFilme(filme);
            return HttpResponse.create();
        } else {
            return HttpResponse.badRequest('Dados inválidos');
        }
    } catch (error) {
        throw new Error('Erro ao criar filme no serviço');
    }
}

export const putFilme = async (id: number, body: FilmeUpdateModel) => {
    try {
        if (!body.classificacaoEtaria || !body.orçamento || !body.bilheteira) {
            return HttpResponse.badRequest('Todos os campos de atualização são obrigatórios.');
        }
        const data = await repository.putFilme(id, body);
        return data ? HttpResponse.ok(data) : HttpResponse.notFound('Filme não encontrado');
    } catch (error) {
        throw new Error('Erro ao atualizar filme');
    }
}

export const deleteFilmeById = async (id: number) => {
    try {
        const filme = await repository.findFilmeById(id);
        if (!filme) {
            return HttpResponse.notFound('Filme não encontrado');
        }
        await repository.deleteFilme(id);
        return HttpResponse.noContent();
    } catch (error) {
        throw new Error('Erro ao deletar filme no serviço');
    }
}