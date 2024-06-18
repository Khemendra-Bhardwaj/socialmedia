import express from 'express'

import { getComment } from '../controllers/getLogic.js'
import { addComment } from '../controllers/postLogic.js'
import { updateComment } from '../controllers/putLogic.js'
import { deleteComment } from '../controllers/deleteLogic.js'

const router = express.Router()

router.get('/:id', getComment)
router.post('/:id', addComment)
router.put('/:id', updateComment)
router.delete('/:id', deleteComment); 


export default router;