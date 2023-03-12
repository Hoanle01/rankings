import express from 'express'
import { HomePageController } from '../controllers/home'
import { PostController } from '../controllers/postItem'
const router = express.Router()
router.get('/8/', HomePageController.getPostitem)
router.get('/post/:id', PostController.getPostitem)
export {
    router
}