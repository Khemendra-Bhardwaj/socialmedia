import express from 'express'

import { getUser } from '../controllers/getLogic.js'
import { addUser } from '../controllers/postLogic.js'
import { updateUser } from '../controllers/putLogic.js'
import { deleteUser } from '../controllers/deleteLogic.js'
import { followUser } from '../controllers/followLogic.js'
import { unfollowUser } from '../controllers/unfollowLogic.js'


const router = express.Router()
router.delete('/unfollow/:followingid/:followerid', unfollowUser )
router.post('/follow/:followingid/:followerid', followUser) 


router.get('/:id', getUser)
router.post('/', addUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)





export default router;