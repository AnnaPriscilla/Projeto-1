import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Receitas Culinárias',
            version: '1.0.0',
            description: 'Documentação da API do Projeto 1'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },

    apis: ['./src/routes/*.js']
};

export const swaggerSpec =
    swaggerJsdoc(options);