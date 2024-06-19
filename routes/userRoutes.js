import express from 'express'

import { getUser, getAllUsers } from '../controllers/getLogic.js'
import { addUser } from '../controllers/postLogic.js'
import { updateUser } from '../controllers/putLogic.js'
import { deleteUser } from '../controllers/deleteLogic.js'
import { followUser } from '../controllers/followLogic.js'
import { unfollowUser } from '../controllers/unfollowLogic.js'
import {likePost,likeComment} from '../controllers/likeLogic.js'


const router = express.Router()

router.delete('/unfollow/:followingid/:followerid', unfollowUser ) // unused 
router.post('/follow/:followingid/:followerid', followUser)  // unused 

router.post('/like/:userid/:postid/:commentid', likeComment)
router.post('/like/:userid/:postid', likePost)

router.get('/allUsers', getAllUsers) // unused
router.get('/:id', getUser)
router.post('/', addUser) // unused : (signup)
router.put('/:id', updateUser)  // ununsed  
router.delete('/:id', deleteUser) // deleteid (have to adjust delete post, comment , followers, following , likes)

 



export default router;