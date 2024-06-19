import express from 'express'
import {getLikeCountPost } from '../controllers/likeLogic.js'

const router = express.Router()

router.get('/likeCounter/:postid', getLikeCountPost)
// router.get('/likeCounter/:postid/:commentid', getLikeCountComment)

export default router;