import express from 'express'

import { getUser } from '../controllers/getLogic.js'
import { addUser } from '../controllers/postLogic.js'
import { updateUser } from '../controllers/putLogic.js'
import { deleteUser } from '../controllers/deleteLogic.js'

const router = express.Router()

router.get('/', getUser)
router.post('/', addUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


export default router;