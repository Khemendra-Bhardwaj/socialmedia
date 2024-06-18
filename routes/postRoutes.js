import express from 'express'

import { getPosts } from '../controllers/getLogic.js'
import { addPost } from '../controllers/postLogic.js'
import { updatePost } from '../controllers/putLogic.js'
import { deletePost } from '../controllers/deleteLogic.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/:id', addPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)


export default router;