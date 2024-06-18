import express from 'express'
const app = express()
import { PrismaClient } from '@prisma/client';
import cors  from 'cors'
const prisma = new PrismaClient()

import commentRoutes from './routes/commentRoutes.js'
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js'

app.use(express.json())
app.use(cors()); 


app.use('/users', userRoutes)

app.use('/comments',commentRoutes)

app.use('/post', postRoutes) 


app.listen(5000, () => {
    console.log('Working Cool !');
})