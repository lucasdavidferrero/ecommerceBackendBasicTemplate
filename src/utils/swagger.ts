import { Express, Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
import openAPI from '../../openapi.json' assert { type: "json" }

/* const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Ecommerce API MC Hogar',
            description: 'API ecommerce de MC Hogar',
            version: '1'
        },
        servers: [
            { url: 'http://localhost:3001/api/v1/', descriprion: 'dev server for version 1.' }
        ]
    },
    apis: ['./src/routes/v1/*.ts']
}*/

// const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs (app: Express, port: number) {
    // Swagger page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(openAPI))

    console.log(`Docs available at http://localhost:${port}/docs`)
}

export default swaggerDocs

// https://www.youtube.com/watch?v=5aryMKiBEKY&ab_channel=TomDoesTech