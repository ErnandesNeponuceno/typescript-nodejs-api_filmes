import {Request, Response} from 'express';
import * as service from '../services/filmes-service';
import { FilmeUpdateModel } from '../model/filmes-update-model';

export const getFilmes = async (req: Request, res: Response) => {
    try {
        const httpResponse = await service.getFilmesService();
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar filmes.', error });
    }
}

export const getFilmeById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const httpResponse = await service.getFilmeById(id);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar filme por ID.', error });
    }
}

export const postFilme = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const httpResponse = await service.postFilme(body);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar filme.', error });
    }
}

export const putFilme = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const body: FilmeUpdateModel = req.body;
        const httpResponse = await service.putFilme(id, body);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar filme.', error });
    }
}

export const deleteFilme = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const httpResponse = await service.deleteFilmeById(id);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar filme.', error });
    }
}