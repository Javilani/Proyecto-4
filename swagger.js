const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Proyecto 4 Documentado',
        version: '1.0.0',
        description: 'Documentación de la API con Swagger',
    },
    servers: [
        {
            url: 'http://localhost:${port}',
            description: 'Servidor local',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./endpoints/*.js'],
};

const swaggerSpect = swaggerJSDoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpect));
}