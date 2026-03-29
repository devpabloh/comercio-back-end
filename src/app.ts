import fastify from "fastify";
import { env } from "./env/index.js";
import { ZodError,z } from "zod";

const app = fastify()

app.setErrorHandler((error, _request, reply)=>{
    if( error instanceof ZodError){
        return reply.status(400).send({
            message: 'Erro de validação',
            issues: z.treeifyError(error)
        })

    }
})