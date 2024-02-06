import { Express, Request, Response } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options: swaggerJsdoc.Options = {
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
}

const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs (app: Express, port: number) {
    // Swagger page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    // Docs in JSON format
    app.get('docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })
    console.log(`Docs available at http://localhost:${port}/docs`)
}

export default swaggerDocs

// https://www.youtube.com/watch?v=5aryMKiBEKY&ab_channel=TomDoesTech