import { HttpResponse } from "../model/http-response-model"
import { statusCode } from "./status-code"


export const ok = async (data:any): Promise<HttpResponse> => {
    return{
        statusCode: statusCode.OK,
        body: data,
    }
}

export const noContent = async (): Promise<HttpResponse> => {
    return{
        statusCode: statusCode.NO_CONTENT,
        body: null,
    }
}

export const badRequest = (message: string = 'Bad request'): HttpResponse => {
    return {
        statusCode: statusCode.BAD_REQUEST,
        body: {
            message: message,
        },
    };
};

export const create = async (): Promise<HttpResponse> => {
    return{
        statusCode: statusCode.CREATED,
        body: {
            message: 'Success'
        }
    }
}

export const conflict = (message: string = 'Conflict'): HttpResponse => {
    return {
        statusCode: statusCode.CONFLICT,
        body: {
            message: message,
        },
    };
};

export const notFound = (message: string = 'Not found'): HttpResponse => {
    return {
        statusCode: statusCode.NOT_FOUND,
        body: {
            message: message,
        },
    };
}

export const error = (message: string = 'An error occurred', status: number = statusCode.INTERNAL_SERVER_ERROR): HttpResponse => {
    return {
        statusCode: status,
        body: {
            message: message,
        },
    };
};