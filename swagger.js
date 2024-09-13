const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
 
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Proyecto 4 Documentado',
            version: '1.0.0',
            description: 'API Information',
            contact: {
                name: 'Developer',
            },
            servers: [
                {
                    url: 'http://localhost:${port}',
                },
            ],
        },
    },
    apis: ['./endpoints/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};