import { Router } from 'express'
import UserController from '../controllers/user.controller'

const userRouter = Router()

const userController = new UserController()

userRouter.post('/signup', userController.store)
userRouter.get('', userController.index)

export default userRouter