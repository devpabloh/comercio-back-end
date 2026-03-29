import 'dotenv/config'
import {z} from 'zod'

const envSchema = z.object({
    PORT: z.number().default(3333),
    DATABASE_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false){
    console.error("Variáveis de ambiente invalidas", z.treeifyError(_env.error))
    throw new Error('Variáveis de ambiente invalidas')
}

export const env = _env.data